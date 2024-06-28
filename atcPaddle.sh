#!/bin/bash

# Tomar la fecha y hora como un parámetro
datetime=$1

while true; do
    # Hacer la solicitud curl y guardar la respuesta en un archivo
    curl --location "https://alquilatucancha.com/api/v3/availability/sportclubs/1003?date=${datetime:0:10}" > response.json

    # Usar jq para procesar el archivo JSON
    response=$(jq -c '.available_courts[] | {name: .name, slots: [.available_slots[] | select(.start | startswith("'$datetime'"))]}' response.json | jq -r 'select(.slots | length > 0) | .name, (.slots[] | .start)')

    # Verificar si hay una cancha disponible en la fecha y hora especificadas
    if [[ -z "$response" ]]; then
        # Mostrar una notificación emergente
        echo "No hay cancha disponible para Distrito paddle el ($datetime)"
    else
        osascript -e 'display notification "Hay cancha disponible para las ('$datetime')." with title "ATC Distrito Paddle"'
        exit 0
    fi
    sleep 60
done
