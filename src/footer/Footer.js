import React from 'react'
import "../footer/footer.css"

const Footer = () => {
  return (
    <>
        <footer className="bg-dark mt-2 mx-center">
        <article className="container bg-dark mx-center">
            <div className="py-2 text-white row justify-between d-colum px-lg-footer">
                <div className="row gap-10 text-white">
                    <p>Email: Yousuf4sociologist@gmail.com</p>
                    <p>Phone: 07060966702</p>
                </div>
                <p>&copy; Yusfultech <span id="year text-white">2023</span> All right reserved</p>
            </div>
        </article>
    </footer>
    </>
  )
}

export default Footer
