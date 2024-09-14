

export default function AppFooter() {

    return (
        <footer className="h-16 flex items-center justify-between">
            <p className="text-[11px]">
                ©2024 <span className="font-bold">Sama Kayit</span>
            </p>

            <nav>
                <ul className="flex gap-4 text-[11px]">
                    <li>
                        <a href="/">Accueil</a>
                    </li>
                    <li>
                        <a href="/">A propos</a>
                    </li>
                    <li>
                        <a href="/">Services</a>
                    </li>
                    <li>
                        <a href="/">Aide</a>
                    </li>
                </ul>
            </nav>

            <div className="flex gap-4">
                <a href="/">
                    <img className="w-4" src="https://img.icons8.com/ios/50/000000/facebook--v1.png" alt="facebook" />
                </a>
                <a href="/">
                    <img className="w-4" src="https://img.icons8.com/ios/50/000000/twitter--v1.png" alt="twitter" />
                </a>
                <a href="/">
                    <img className="w-4" src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" alt="instagram" />
                </a>
            </div>
        </footer>
    )
}