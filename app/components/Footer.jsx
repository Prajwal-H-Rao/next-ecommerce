import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="bg-gray-800 text-white py-6">
                <div class="container mx-auto text-center">
                    <nav class="flex justify-center space-x-6">
                        <Link href="/home" class="hover:underline">Home</Link>
                        <Link href="/men" class="hover:underline">Men</Link>
                        <Link href="/women" class="hover:underline">Women</Link>
                    </nav>
                    <p class="mt-4 text-sm">&copy; 2024 Soul Sports. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer