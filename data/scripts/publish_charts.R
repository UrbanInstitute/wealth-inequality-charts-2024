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
chart_cols <- c("charts")

# unnest and extract the id of chart
chart_ids <- raw_content$sections %>% unnest_longer(charts) %>%
  mutate(
    dw_id = charts$id
  ) %>%
  pull(dw_id)

# publish each chart
for (dw_id in chart_ids) {
  dw_publish_chart(dw_id)
}
