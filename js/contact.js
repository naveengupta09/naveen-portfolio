// Contact form submission handler
const contactForm = document.getElementById('contact-form');
const messageBtn = document.getElementById('message-btn');
const alertDiv = document.querySelector('.alert');
const loader = document.querySelector('.loader');

// Show loader
function showLoader() {
    if (loader) {
        loader.style.display = 'flex';
        messageBtn.disabled = true;
    }
}

// Hide loader
function hideLoader() {
    if (loader) {
        loader.style.display = 'none';
        messageBtn.disabled = false;
    }
}

// Show alert message with animation
function showAlert(message, type = 'success') {
    if (!alertDiv) return;
    
    alertDiv.textContent = message;
    alertDiv.className = `alert ${type}`;
    alertDiv.style.display = 'block';
    
    // Trigger animation
    setTimeout(() => {
        alertDiv.style.opacity = '1';
    }, 10);
    
    // Auto-hide after 5 seconds with fade out
    setTimeout(() => {
        alertDiv.style.opacity = '0';
        setTimeout(() => {
            alertDiv.style.display = 'none';
        }, 300);
    }, 5000);
}

// Add input focus effects
const inputs = contactForm.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement?.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement?.classList.remove('focused');
    });
});

// Handle form submission
messageBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validation with visual feedback
    if (!name || !email || !message) {
        showAlert('Please fill in all fields', 'error');
        // Highlight empty fields
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#f44336';
                setTimeout(() => {
                    input.style.borderColor = '';
                }, 2000);
            }
        });
        return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showAlert('Please enter a valid email address', 'error');
        const emailInput = document.getElementById('email');
        emailInput.style.borderColor = '#f44336';
        setTimeout(() => {
            emailInput.style.borderColor = '';
        }, 2000);
        return;
    }
    
    showLoader();
    
    try {
        // Using Formspree or similar service - you can replace this with your backend endpoint
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        });
        
        if (response.ok) {
            showAlert('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            // Reset all input styles
            inputs.forEach(input => {
                input.style.borderColor = '';
            });
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error:', error);
        // Fallback: Use mailto link if service is not configured
        const mailtoLink = `mailto:your-email@example.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(email)}`;
        window.location.href = mailtoLink;
        showAlert('Opening email client... Please send your message manually.', 'info');
    } finally {
        hideLoader();
    }
});

// Add enter key support for form submission (Ctrl/Cmd + Enter)
contactForm.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        messageBtn.click();
    }
});

