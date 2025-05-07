import Link from 'next/link'
import React from 'react'

function Sidebar({ logout }) {
  return (
    <aside>
      <ul>
        <li><Link href="/nxt-admin/slider">اسلایدر</Link></li>
        <li><Link href="/nxt-admin/blogs">بلاگ</Link></li>
        <li><Link href="/nxt-admin/products">محصولات</Link></li>
        <li><Link href="/nxt-admin/categories">دسته بندی ها</Link></li>
        <li><button onClick={() => logout()}>خروج</button></li>
      </ul>
    </aside>
  )
}

export default Sidebar