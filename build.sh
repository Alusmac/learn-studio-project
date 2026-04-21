#!/usr/bin/env bash
# зупинити скрипт при помилці
set -o errexit

# встановлення залежностей
pip install -r requirements.txt

# збір статики (WhiteNoise про який казали раніше)
python manage.py collectstatic --no-input

# застосування міграцій до бази Render
python manage.py migrate
