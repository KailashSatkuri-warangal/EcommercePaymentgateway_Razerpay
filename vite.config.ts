import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/EcommercePaymentgateway_Razerpay/'  // <-- Add this line
});
