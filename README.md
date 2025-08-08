**ShopSphere E-commerce Platform**

ShopSphere is a full-stack e-commerce application built with the MERN (MongoDB, Express, React, Node.js) stack. It features a complete shopping experience for users and a comprehensive admin panel for managing the store.

**Features**
Shopper's View
**User Authentication:** Secure registration and login for users.
**Dynamic Homepage:** Features a sliding banner and sections for shopping by category and brand.
**Product Listing:** Browse all products with advanced filtering by category and brand, and sorting options (price, title).
**Product Details:** View detailed information for each product, including descriptions, pricing, and user reviews.
**Search:** A real-time search functionality to find products by keywords across titles, descriptions, categories, and brands.
**Product Reviews:** Authenticated users who have purchased a product can leave a rating and a written review.
**Shopping Cart:** Add products to the cart, update item quantities, and remove items.
**Address Management:** Users can add, edit, and delete multiple shipping addresses from their account page.
**Secure Checkout:** A multi-step checkout process with address selection.
**PayPal Integration:** Seamless and secure payment processing via the PayPal REST API.
**Order History:** Users can view their past orders and order details in their account section.
**Admin Panel**
**Secure Admin Access:** Separate login and role-based access control for administrators.
**Dashboard:** A central hub for managing store features, including uploading and displaying banner images for the homepage.
**Product Management:** Full CRUD (Create, Read, Update, Delete) functionality for all products in the store.
**Image Uploads:** Product images are uploaded to Cloudinary for efficient storage and delivery.
**Order Management:** View a list of all user orders, inspect order details, and update the status of each order (e.g., Pending, Shipped, Delivered).
Tech Stack
**Frontend:**
**React:** A JavaScript library for building user interfaces.
**Vite:** A fast build tool and development server for modern web projects.
**Redux Toolkit:** For efficient and predictable state management.
**Tailwind CSS:** A utility-first CSS framework for rapid UI development.
**shadcn/ui:** A collection of re-usable components built with Radix UI and Tailwind CSS.
**React Router:** For declarative routing in the React application.
**Backend:**
**Node.js:** A JavaScript runtime environment.
**Express.js:** A minimal and flexible Node.js web application framework.
**MongoDB:** A NoSQL database for storing application data.
**Mongoose:** An alegant MongoDB object modeling tool for Node.js.
Services & Authentication:
**JSON Web Tokens (JWT):** For secure user authentication and session management via cookies.
**bcryptjs:** For hashing user passwords.
**Cloudinary:** For cloud-based image storage and management.
**PayPal REST SDK:** For processing payments.
**Multer:** For handling multipart/form-data, used for file uploads.
**Project Structure**
The project is organized into two main directories: client and server.

/
├── client/         # React frontend application
│   ├── src/
│   │   ├── components/ # Reusable UI components (Auth, Admin, Shopping views)
│   │   ├── pages/      # Page components for different routes
│   │   ├── store/      # Redux Toolkit state management
│   │   └── config/     # Form configurations and constants
│   └──...
└── server/         # Node.js/Express backend API
    ├── controllers/  # Logic for handling requests
    ├── models/       # Mongoose data schemas
    ├── routes/       # API endpoint definitions
    └── helpers/      # Utilities for Cloudinary and PayPal
Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js (v16 or later)
MongoDB installed and running.
Installation
Clone the repository:

git clone https://github.com/deep262004/shopsphere-ecommerce-plateform.git
cd shopsphere-ecommerce-plateform/mern-ecommerce-2024-master
Set up the Backend:

cd server
npm install
Create a .env file in the server directory and add the following variables. Note: You will need to create your own accounts for PayPal and Cloudinary to get these credentials.

# This project uses a hardcoded MongoDB connection string in server.js.
# It's recommended to replace it with this environment variable.
MONGO_URI=mongodb://localhost:27017/your_db_name

# Secret key for signing JWTs
CLIENT_SECRET_KEY=your_jwt_secret_key

# PayPal Credentials
PAYPAL_MODE=sandbox
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret

# Cloudinary Credentials
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
Set up the Frontend:

cd ../client
npm install
Running the Application
Start the backend server:

In the server directory, run:
npm run dev
The server will start on http://localhost:5000.

Start the frontend development server:

In the client directory, run:
npm run dev
The application will be available at http://localhost:5173.

API Endpoints
The server exposes the following RESTful API endpoints:

/api/auth/: User registration, login, logout, and authentication checks.
/api/admin/products/: CRUD operations for products (admin only).
/api/admin/orders/: Fetching and updating all user orders (admin only).
/api/common/feature/: Managing homepage feature/banner images (admin only).
/api/shop/products/: Fetching products with filtering and sorting for users.
/api/shop/cart/: Managing the user's shopping cart.
/api/shop/address/: CRUD operations for user addresses.
/api/shop/order/: Creating orders and handling PayPal payments.
/api/shop/search/: Searching for products.
/api/shop/review/: Adding and fetching product reviews. 
