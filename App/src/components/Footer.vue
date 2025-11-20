<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 Team AG - All rights reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer {
  background-color: lightgrey;
  color: rgb(18, 75, 162);
  text-align: center;
  padding: 20px;
  margin-top: auto;
  border-radius: 15px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (max-width: 600px) {
  .footer {
    padding: 15px;
    border-radius: 10px;
  }
}

</style>