#!/bin/bash
# extracted from https://raw.githubusercontent.com/croesch/beefiles/master/src/execute-on-vnc.sh
# but adding proper exit code for the passed command

NEW_DISPLAY=42
DONE="no"

while [ "$DONE" == "no" ]
do
  out=$(xdpyinfo -display :${NEW_DISPLAY} 2>&1)
  if [[ "$out" == name* ]] || [[ "$out" == Invalid* ]]
  then
    # command succeeded; or failed with access error;  display exists
    (( NEW_DISPLAY+=1 ))
  else
    # display doesn't exist
    DONE="yes"
  fi
done

echo "Using first available display :${NEW_DISPLAY}"

OLD_DISPLAY=${DISPLAY}

#check if a custom resolution is passed as first parameter
[[ "$1" == *x* ]] && resolution="$1" || resolution="1600x1200"
vncserver ":${NEW_DISPLAY}" -localhost -geometry $resolution -depth 16
export DISPLAY=:${NEW_DISPLAY}

#if resolution was present in parameters we need to avoid it.
[[ "$1" == *x* ]] && args="${@:2}" || args="$@"
eval $args
EXIT_CODE=$?

export DISPLAY=${OLD_DISPLAY}
vncserver -kill ":${NEW_DISPLAY}"

exit $EXIT_CODE
