class HesaplayicimFooter extends HTMLElement {
connectedCallback() {
this.innerHTML = `
<footer>
    <div class="footer-inner">

        <!-- Sitenin Logosu -->
        <img src="/src/assets/icons/logo-icon.svg" class="logo" alt="Hesaplayıcım Logo">

        <!-- Araç sayısı -->
        <div class="arac-sayisi">
            <span class="arac-sayisi__dot"></span>
            <strong class="arac-sayisi__sayi">31</strong>
            <span class="arac-sayisi__yazi">ücretsiz hesaplama aracı</span>
        </div>

        <div class="footer-divider"></div>

        <!-- Site legal dosyaları -->
        <ul id="site-sartlari">
            <li><a href="/hizmet-sartlari">Hizmet Şartları</a></li>
            <li><a href="/gizlilik-politikasi">Gizlilik Politikası</a></li>
            <li><a href="/cerezler">Çerezler</a></li>
        </ul>

        <!-- Sitenin mail adresi -->
        <a id="mail-addres" href="mailto:hesaplayicim@gmail.com" target="_blank">
            hesaplayicim@gmail.com
        </a>

        <!-- Copyright ve repo -->
        <div id="footernote">
            <p class="copyright">
                © <span id="date-site"></span> hesaplayicim.com
            </p>
            <div class="social-media-icons">
                <a class="github-link"
                   title="Github Reposu"
                   href="https://github.com/ahmetyilmaz90/hesaplayicim"
                   target="_blank"
                   rel="noopener noreferrer">
                    <img class="github-icon"
                         src="/src/assets/icons/mdi_github.svg"
                         alt="Github">
                </a>
            </div>
        </div>

    </div>
</footer>
`
// Yılı otomatik doldur
this.querySelector('#date-site')
.textContent = new Date().getFullYear()
}
}
customElements.define(
'hesaplayicim-footer',
HesaplayicimFooter
)