import Bottle from '../public/bottle.jpg'
import Shoes from '../public/shoes.jpg'
import Hoodie from '../public/hoodie.jpg'

export const navLinks = [{ "title": "Home", "link": "/home" }, { "title": "Men", "link": "/men" }, { "title": "Women", "link": "/women" }]
export const categories = [{ "image": Shoes, "category_name": "Shoes", "link": "/shoes" }, { "image": Hoodie, "category_name": "Tracks", "link": "/tracks" }, { "image": Bottle, "category_name": "Accessories", "link": "/accessories" }]

//temporary
export const brands = [{ "url": "https://i.pinimg.com/736x/33/e6/3d/33e63d5adb0da6b303a83901c8e8463a.jpg", "brand": "nike" }, { 'url': "https://cdn.freebiesupply.com/logos/large/2x/adidas-logo.png", "brand": "Adidas" },{"url":"https://cdn.freebiesupply.com/logos/large/2x/puma-logo-png-transparent.png","brand":"Puma"}]