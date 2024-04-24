library(tidyverse)
# install.packages("devtools") # if not already installed on your system
# devtools::install_github("munichrocker/DatawRappr")
library(DatawRappr)
library(jsonlite)
library(here)


# directory where source data is stored
input_dir <- here("src", "data")
# input file that describes project content, including info about our charts in JSON format
input_file <- here(input_dir, "site_content.json")
# read raw JSON data
raw_content <- fromJSON(input_file)

# columns we want to extract from nested JSON structure
chart_cols <- c("chart_title", "chart_notes", "chart_source", "charts")

# unnest and extract the info we need about each chart
charts <- raw_content$sections %>%
  select(any_of(chart_cols)) %>%
  unnest_longer(charts, names_repair = "minimal") %>%
  mutate(
    dw_id = charts$id,
    chart_title = case_when(
      !is.na(charts$chart_title) ~ charts$chart_title,
      .default = chart_title
    ),
  ) %>%
  select(
    dw_id,
    chart_title,
    chart_notes,
    chart_source
  )

# loop through charts, edit title, source, notes and republish
for (row_num in 1:nrow(charts)) {
  dw_id <- pluck(charts$dw_id, row_num)
  chart_title <- pluck(charts$chart_title, row_num)
  chart_notes <- pluck(charts$chart_notes, row_num)
  chart_source <- pluck(charts$chart_source, row_num)
  print(sprintf("Updating datawrapper chart: %s", dw_id))
  dw_edit_chart(
    dw_id,
    title = chart_title,
    describe = list(
      "source-name" = chart_source
      # @TODO set up alt text later
      # "aria-description" = chart_alt_text
    ),
    annotate = chart_notes,
    publish = list(
      blocks = list(
        "download-image" = TRUE,
        "get-the-data" = TRUE
      )
    )
  )
}

