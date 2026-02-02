# YT Media Downloader 🎬

A professional Django-based web application that allows users to download YouTube videos and audio efficiently using **yt-dlp**.

> ⚠️ **Disclaimer:** This project is intended for educational and personal use only. Downloading copyrighted content without permission may violate YouTube’s Terms of Service and local laws.

---

## 🚀 Features

* 📥 Download YouTube videos (MP4)
* 🎧 Download audio-only files (MP3)
* ⚙️ Powered by `yt-dlp` (reliable and actively maintained)
* 🧩 Clean Django project structure
* 🖥️ Simple and user-friendly web interface

---

## 🛠️ Tech Stack

* **Backend:** Django (Python)
* **Frontend:** HTML, CSS
* **Downloader Engine:** yt-dlp
* **Environment:** Python Virtual Environment (venv)

---

## 📂 Project Structure

```
yt-media-downloader/
├── downloader/
├── yt_downloader/
├── templates/
│   └── downloader/
├── venv/
├── manage.py
├── requirements.txt
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/AsbinGhimire/ytb-media-downloader.git
cd ytb-media-downloader
```

### 2️⃣ Create & activate virtual environment

**Windows**

```
python -m venv venv
venv\Scripts\activate
```

**macOS / Linux**

```
python3 -m venv venv
source venv/bin/activate
```

---

### 3️⃣ Install dependencies

```
pip install -r requirements.txt
```

---

### 4️⃣ Run database migrations

```
python manage.py migrate
```

---

### 5️⃣ Start the development server

```
python manage.py runserver
```

Open your browser and visit:

```
http://127.0.0.1:8000/
```

---

## 📌 Future Improvements

* Video quality selection (360p / 720p / 1080p)
* Download progress bar
* Thumbnail preview
* Copy download link
* Tailwind CSS UI
* Background tasks (Celery + Redis)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Asbin Ghimire**
GitHub: [https://github.com/AsbinGhimire](https://github.com/AsbinGhimire)

---

⭐ If you found this project helpful, consider giving it
