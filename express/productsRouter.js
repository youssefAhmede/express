const express = require('express');
const router = express.Router();
const fs = require('fs');

// قراءة المنتجات من ملف JSON
function Read() {
    const data = fs.readFileSync('pro.json', 'utf8');
    return JSON.parse(data);
}
let products = Read();

// إعادة كتابة المنتجات إلى ملف JSON
function Write() {
    fs.writeFileSync('pro.json', JSON.stringify(products, null, 4));
}

// الحصول على جميع المنتجات
router.get('/', (req, res) => {
    res.status(200).json(products);
});

// الحصول على منتج محدد
router.get('/:id', (req, res) => {
    const id = +req.params.id;
    const product = products.find(p => p.id === id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

// إضافة منتج جديد
router.post('/', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    Write(); // تحديث البيانات في ملف JSON
    res.status(201).json(products);
});

// حذف منتج
router.delete('/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        Write(); // تحديث البيانات في ملف JSON
        res.status(200).json(products);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

// تعديل منتج
router.put('/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex !== -1) {
        products[productIndex] = { ...products[productIndex], ...req.body };
        Write(); // تحديث البيانات في ملف JSON
        res.status(200).json(products);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

module.exports = router;
