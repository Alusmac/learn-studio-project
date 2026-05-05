Learning Management System (LMS) built with Django and Django REST Framework.

---

## 🚀 Features

- User authentication and authorization
- Course creation and management
- Lesson structure
- REST API for frontend integration
- Database-backed content management

---

## 🛠 Tech Stack

- Python
- Django
- Django REST Framework
- PostgreSQL / SQLite
- Git & GitHub

---

## 👨‍💻 My Contribution

This is a team project developed collaboratively.

My responsibilities included:
- Developing backend logic using Django
- Building REST API endpoints with Django REST Framework
- Implementing authentication and user-related features
- Working with database models and queries

---

## ⚙️ Installation and Setup
1. Clone the repository

    ```bash
    git clone https://github.com/Alusmac/learn-studio-project.git
    cd learn_studio
2. Create virtual environment
     ```bash
   python -m venv venv
   source venv/bin/activate
3. Install dependencies
    ```bash
   pip install -r requirements.txt
4. Create .env file
    ```bash
   touch .env
5. Generate SECRET_KEY
    ```bash
   echo "SECRET_KEY=$(python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())')" >> .env
6. Run server
    ```bash
   python manage.py runserver
          
