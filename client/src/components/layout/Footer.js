import React from 'react'

export default () => {
  return (
    <div>
      <footer className="footer bg-light text-black mt-5 p-4 text-center">
        <div className="footer-cont">
            <ul>
                <li>
                    About Us
                </li>
                <li>
                    Support
                </li>
                <li>
                    Press
                </li>
                <li>
                    API
                </li>
                <li>
                    Jobs
                </li>
                <li>
                    Privacy
                </li>
                <li>
                    Terms
                </li>
                <li>
                    Directory
                </li>
                <li>
                    Profiles
                </li>
                <li>
                    Hashtags
                </li>
                <li>
                    Language
                </li>
            </ul>
            <span>
            &copy; { new Date().getFullYear() } Instagames
            </span>
        </div>
      </footer>
    </div>
  )
}
