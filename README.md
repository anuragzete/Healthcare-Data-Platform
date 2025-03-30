# 🏥 Healthcare Data Platform

**A smart and interactive platform** that allows users to enter their **symptoms** along with personal details like **age, weight, and gender**, and displays potential diseases, their details, preventions, and cures by fetching data from an external **API**.

---

## 🚀 Features

### ✅ **Symptom-Based Diagnosis**
- Accepts **symptoms** from the user along with:
    - Age
    - Weight
    - Gender
- Fetches potential diseases and related information from an external **API**.

### 🔥 **Detailed Disease Information**
- Displays:
    - Disease name and description.
    - Symptoms associated with the disease.
    - Preventive measures.
    - Suggested treatments or cures.

### 🌐 **API Integration**
- Uses **fetch API** to retrieve real-time healthcare data.
- Displays results dynamically in an easy-to-read format.

### 💾 **User-Friendly Interface**
- Intuitive and responsive UI.
- Clear labels and structured display of disease details.

---

## 🛠️ Tech Stack

- **Frontend:** React.js + Vite
- **Backend:** Fetch API for real-time data
- **Styling:** Tailwind CSS
- **Data:** Healthcare API with disease information

---

## 🔥 How It Works

1. **Input Symptoms:**
    - Users provide their symptoms along with age, weight, and gender.
2. **API Fetching:**
    - The platform sends a request to the **Healthcare API**.
3. **Data Display:**
    - Displays disease details, preventions, and treatments in an organized format.

---

## 📊 Folder Structure

```plaintext
/healthcare-data-platform
 ├── src
 │     ├── components             # React components
 │     │     ├── SymptomForm.jsx         # Symptom input form
 │     │     ├── ResultDisplay.jsx       # Disease details display
 │     ├── services               # API services
 │     │     ├── api.js                  # API fetching logic
 │     └── styles                  # Styling with Tailwind CSS
 ├── public                        # Static files
 ├── index.html                     # Main HTML file
 ├── README.md                      # Project documentation
 ├── package.json                   # Project dependencies
 ├── vite.config.js                 # Vite configuration
```

---

## 💻 How to Run Locally

### ✅ **Prerequisites:**
- **Node.js** installed.

### 🚀 **Steps:**
1. Clone the repository:
```bash
$ git clone https://github.com/anuragzete/Healthcare-Data-Platform.git
```
2. Install dependencies:
```bash
$ npm install
```
3. Start the server:
```bash
$ npm run dev
```
4. Access the platform at:
```
http://localhost:5173
```

---

## 🔥 API Configuration

- Create a `.env` file at the root of the project.
- Add your API key and endpoint:
```plaintext
VITE_HEALTHCARE_API_KEY=<your-api-key>
VITE_HEALTHCARE_API_URL=<your-api-url>
```

---

## ⚙️ Future Enhancements

- ✅ **User Authentication:**
    - Secure access with authentication tokens.
- ✅ **Medical History Storage:**
    - Allow users to save and view their previous diagnoses.
- ✅ **Data Visualization:**
    - Display disease trends with charts.
- ✅ **Multi-language Support:**
    - Offer multilingual disease details.

---

## ⚖️ License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it.

---

## 📧 Contact

- **Email:** anuragzete27@outlook.com
- **Portfolio:** [Anurag Zete](https://portfolio-anuragzete.web.app)

---

🏥 **Efficient and accurate disease prediction with real-time data!** 🚀

