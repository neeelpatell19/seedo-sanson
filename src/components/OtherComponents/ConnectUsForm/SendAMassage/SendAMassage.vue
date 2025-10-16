<template>
    <section class="sa-message">
      <div class="sa-container">
        <!-- Left: Heading -->
        <div class="sa-left">
          <h1 class="sa-title">
            <span>Send a</span><br />
            <span>Message</span>
          </h1>
        </div>
  
        <!-- Right: Form -->
        <form class="sa-form" @submit.prevent="handleSubmit">
          <label class="sr-only" for="sa-name">Name</label>
          <input
            id="sa-name"
            class="sa-input"
            type="text"
            name="name"
            placeholder="Name"
            autocomplete="name"
            v-model="formData.name"
            required
          />
  
          <label class="sr-only" for="sa-email">Email Address</label>
          <input
            id="sa-email"
            class="sa-input"
            type="email"
            name="email"
            placeholder="Email Address"
            autocomplete="email"
            v-model="formData.email"
            required
          />
  
          <label class="sr-only" for="sa-message">Message</label>
          <textarea
            id="sa-message"
            class="sa-textarea"
            name="message"
            placeholder="Message"
            rows="6"
            v-model="formData.message"
            required
          ></textarea>
  
          <button type="submit" class="sa-button">Submit</button>
        </form>
      </div>
      
      <!-- Toast Notification -->
      <div v-if="toast.show" 
           :class="['toast', `toast-${toast.type}`]"
           @click="hideToast">
        <div class="toast-content">
          <span class="toast-icon">
            {{ toast.type === 'success' ? '✓' : '✕' }}
          </span>
          <span class="toast-message">{{ toast.message }}</span>
          <button class="toast-close" @click.stop="hideToast">×</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { reactive, ref } from 'vue';
  import "./SendAMassage.css";
  
  export default {
    setup() {
      const formData = reactive({
        name: '',
        email: '',
        message: ''
      });

      const toast = ref({
        show: false,
        message: '',
        type: 'success' // 'success' or 'error'
      });

      const handleSubmit = async () => {
        console.log('Form submitted with data:');
        console.log('Name:', formData.name);
        console.log('Email:', formData.email);
        console.log('Message:', formData.message);
        
        // Create request body
        const requestBody = {
          subject: `New Message From Seedo Visitor: ${formData.name}`,
          emailBody: `<p><b>Sender's Email Address:</b> ${formData.email}</p><p><b>Message:</b> ${formData.message}</p>`
        };
        
        console.log('Request body:', requestBody);
        
        try {
          const response = await fetch('https://testapi.prepseed.com/autosend/emailToSeedo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
          });
          
          if (response.ok) {
            const result = await response.json();
            console.log('Email sent successfully:', result);
            // Use the message from the API response if available, otherwise use default
            const message = result.message || 'Message sent successfully!';
            showToast(message, 'success');
          } else {
            console.error('Failed to send email:', response.status, response.statusText);
            showToast('Failed to send message. Please try again.', 'error');
          }
        } catch (error) {
          console.error('Error sending email:', error);
          showToast('Error sending message. Please check your connection and try again.', 'error');
        }
        
        // Reset form after submission
        formData.name = '';
        formData.email = '';
        formData.message = '';
      };

      const showToast = (message, type) => {
        toast.value = {
          show: true,
          message,
          type
        };
        
        // Auto-hide toast after 5 seconds
        setTimeout(() => {
          toast.value.show = false;
        }, 5000);
      };

      const hideToast = () => {
        toast.value.show = false;
      };

      return {
        formData,
        toast,
        handleSubmit,
        showToast,
        hideToast
      };
    }
  };
  </script>
  
  <style scoped>
  /* Toast Notification Styles */
  .toast {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    min-width: 300px;
    max-width: 500px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    animation: slideIn 0.3s ease-out;
  }

  .toast-success {
    background-color: #10b981;
    color: white;
  }

  .toast-error {
    background-color: #ef4444;
    color: white;
  }

  .toast-content {
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 12px;
  }

  .toast-icon {
    font-size: 20px;
    font-weight: bold;
    flex-shrink: 0;
  }

  .toast-message {
    flex: 1;
    font-size: 14px;
    line-height: 1.4;
  }

  .toast-close {
    background: none;
    border: none;
    color: inherit;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.2s;
  }

  .toast-close:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .toast {
      top: 10px;
      right: 10px;
      left: 10px;
      min-width: auto;
    }
  }
  </style>
  