#!/bin/bash

set -e

rsync -rva --delete afghanistan_map/* jameslaneconkling@map.timconkling.com:map.timconkling.com/
