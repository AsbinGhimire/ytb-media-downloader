document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('download-form');
    const submitBtn = document.getElementById('submit-btn');
    const statusMessage = document.getElementById('status-message');
    const urlInput = document.getElementById('url');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // UI Loading State
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loader"></span> Processing...';
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
