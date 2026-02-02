from django.shortcuts import render
import yt_dlp
import os

DOWNLOAD_DIR = "downloads"

def home(request):
    message = ""

    if request.method == "POST":
        url = request.POST.get("url")
        format_type = request.POST.get("format")

        os.makedirs(DOWNLOAD_DIR, exist_ok=True)

        if format_type == "audio":
            ydl_opts = {
                'format': 'bestaudio/best',
                'outtmpl': f'{DOWNLOAD_DIR}/%(title)s.%(ext)s',
                'postprocessors': [{
                    'key': 'FFmpegExtractAudio',
                    'preferredcodec': 'mp3',
                }],
            }
        else:
            ydl_opts = {
                'format': 'best',
                'outtmpl': f'{DOWNLOAD_DIR}/%(title)s.%(ext)s',
            }

        try:
            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                ydl.download([url])
            message = "Download completed ✅"
        except Exception as e:
            message = f"Error: {e}"

    return render(request, 'downloader/index.html', {'message': message})
