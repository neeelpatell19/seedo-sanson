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
        <form class="sa-form" @submit.prevent>
          <label class="sr-only" for="sa-name">Name</label>
          <input
            id="sa-name"
            class="sa-input"
            type="text"
            name="name"
            placeholder="Name"
            autocomplete="name"
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
            required
          />
  
          <label class="sr-only" for="sa-message">Message</label>
          <textarea
            id="sa-message"
            class="sa-textarea"
            name="message"
            placeholder="Message"
            rows="6"
            required
          ></textarea>
  
          <button type="submit" class="sa-button">Submit</button>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  import "./SendAMassage.css";
  export default {};
  </script>
  
  <style scoped></style>
  