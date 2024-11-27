const apiKey = '876c7bea0f95c80803f3d691'; // استبدل YOUR_API_KEY بمفتاح API الخاص بك
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

async function fetchExchangeRate() {
    const priceElement = document.getElementById('price');

    try {
        // جلب بيانات سعر الصرف من API
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.result === "success") {
            // استخرج سعر الصرف للدينار العراقي
            const exchangeRate = data.conversion_rates['IQD'];
            const amountInIraqi = (100 * exchangeRate).toFixed(2);

            priceElement.textContent = `100 دولار تساوي: ${amountInIraqi} دينار عراقي`;
        } else {
            priceElement.textContent = 'لم يتم العثور على البيانات.';
        }
    } catch (error) {
        priceElement.textContent = 'حدث خطأ أثناء جلب سعر الصرف.';
        console.error(error);
    }
}

// تحديث السعر عند تحميل الصفحة
fetchExchangeRate();
