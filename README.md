# Learn Studio

This is a Django project for a Learning Management System (LMS)
___

## Installation and Setup

1. **Clone the repository**

```bash
git clone git@github.com:ElizabethKorzhova/learn_studio.git
cd learn_studio
```

2. **Create and activate a virtual environment**

```bash
python -m venv venv
source venv/bin/activate
```

3. **Install dependencies**

```bash
pip install -r requirements.txt
```

4. **Create a ```.env``` file**

```bash
touch .env
```

5. **Generate a ```SECRET_KEY``` and insert into the ```.env``` file**

```bash
echo "SECRET_KEY=$(python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())')" >> .env
```

6. **Start the development server**

```bash
python manage.py runserver
```
