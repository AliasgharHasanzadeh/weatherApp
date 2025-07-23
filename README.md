# 🌦️ Weather App

🚀 [Live Demo](https://weatherapp.aliasghardev.ir)

A **responsive weather forecast app** with real-time data using the **OpenWeather API**.  
Fully supports **search by city name**, and works smoothly across networks in Iran thanks to a **Cloudflare backend proxy** that hides the API key.

---

### 🛠️ Technologies Used:
- **HTML**
- **CSS (Tailwind)**
- **JavaScript**
- **Cloudflare Workers**

---

### 🔐 Backend Security
To avoid exposing the `API key` and to ensure compatibility across all ISPs in Iran,  
we used a **Cloudflare Worker** as a backend to:
- Hide the `OpenWeather API key`
- Prevent direct client-side requests (which might be blocked or rate-limited)
- Format data to match frontend expectations (`res.json()`)

---

### ✨ Features:
- 🔍 **Search by city name**
- 📡 **Real-time weather data**
- 📦 **Backend proxy (Cloudflare Worker)**
- 🔐 **Secure API access**
- 💡 **Clean UI & responsive layout**

---

### 🖼️ Preview:

<img width="1918" height="866" alt="weatherapp" src="https://github.com/user-attachments/assets/3379953f-50e8-4665-a98d-7a4f0871c93a" />


---

**🌐 reach me in :**
- [LinkedIn](https://www.linkedin.com/in/aliasghar-hasanzadeh/) 
- [Instagram](https://www.instagram.com/aliasghar.dev?igsh=cmg5ZnJvMDMxODdu) 
- [codepen](https://codepen.io/Aliasghar-Hasanzadeh) 
---

> ⚠️ Note: This app uses the **free tier** of OpenWeather, so data limits may apply. You can upgrade the API plan or change the source if needed.
