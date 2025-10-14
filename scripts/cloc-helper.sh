#!/bin/bash

# cloc-script.sh
# This script runs `cloc` to count lines of code, but only for specific directories: `components`, `islands`, and `routes`.

# Directories to include in the cloc analysis
TARGET_DIRS=("components" "islands" "routes")

# Construct the cloc command
CLOC_COMMAND="cloc ${TARGET_DIRS[*]}"

echo "Running cloc for directories: ${TARGET_DIRS[*]}"
if $CLOC_COMMAND; then
  echo "cloc completed successfully."
else
  echo "Error running cloc."
  exit 1
fi
