#!/bin/bash

set -e

rsync -rva --delete afghanistan_map_v3/* jameslaneconkling@map.timconkling.com:map.timconkling.com/
