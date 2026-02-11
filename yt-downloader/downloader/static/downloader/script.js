document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('download-form');
    const submitBtn = document.getElementById('submit-btn');
    const statusMessage = document.getElementById('status-message');
    const urlInput = document.getElementById('url');
    const themeToggle = document.getElementById('theme-toggle');
    
    // Theme Logic
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
        document.body.setAttribute('data-theme', 'light');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add a small rotation effect to icon
        const icon = themeToggle.querySelector(newTheme === 'light' ? '.icon-sun' : '.icon-moon');
        if (icon) {
            icon.style.transform = 'rotate(360deg)';
            setTimeout(() => icon.style.transform = '', 500);
        }
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // UI Loading State
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Processing...';
        statusMessage.className = 'status-message'; // Reset classes
        statusMessage.style.display = 'none';

        const formData = new FormData(form);

        try {
            const response = await fetch('', { // Post to current URL
                method: 'POST',
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            const data = await response.json();

            if (data.status === 'success') {
                showStatus(data.message, 'success');
                urlInput.value = ''; // Clear input on success
            } else {
                showStatus(data.message, 'error');
            }

        } catch (error) {
            showStatus('An unexpected error occurred. Please try again.', 'error');
            console.error('Error:', error);
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });

    function showStatus(message, type) {
        statusMessage.textContent = message;
        statusMessage.className = `status-message ${type}`;
        statusMessage.style.display = 'block';
    }
});
