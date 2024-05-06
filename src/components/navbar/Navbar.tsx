import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar__container">
            <div className="navbar__top-bar"></div>
            <div className="navbar">
                <div className="navbar__logo">
                    <svg width="1457" height="744" viewBox="0 0 1457 744" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5072 131.07V54.3116H243.482V131.07H169.199V632.064H90.7897V131.07H16.5072ZM304.855 632.064C279.544 632.064 259.185 624.911 243.778 610.605C228.922 595.749 221.493 577.315 221.493 555.306V296.142H209.113L217.367 219.384H299.903V555.306H347.774V219.384H426.183V670.856C426.183 692.316 418.755 709.373 403.898 722.029C389.042 735.235 370.609 741.837 348.599 741.837H299.077C275.967 741.837 257.259 734.684 242.953 720.378C228.647 706.622 221.493 688.189 221.493 665.079V648.572H299.903V670.856H347.774V599.875L327.14 632.064H304.855ZM543.043 741.837H464.633V296.142H444.825L453.078 219.384H543.043V251.573L563.677 219.384H585.961C611.272 219.384 631.356 226.537 646.213 240.843C661.619 255.15 669.323 273.583 669.323 296.142V555.306C669.323 577.315 661.619 595.749 646.213 610.605C631.356 624.911 611.272 632.064 585.961 632.064H582.66C567.803 632.064 554.598 628.488 543.043 621.335V741.837ZM586.787 296.142H543.043V555.306H586.787C589.538 555.306 590.913 553.93 590.913 551.179V300.269C590.913 297.518 589.538 296.142 586.787 296.142Z" fill="black"/>
                        <path d="M1008 587.377H1200.13" stroke="black" stroke-width="68.7801"/>
                        <path d="M876.062 633.877V297.955H856.254L864.507 221.196H954.472V253.385L975.106 221.196H997.39C1022.7 221.196 1042.79 228.35 1057.64 242.656C1073.05 256.962 1080.75 275.395 1080.75 297.955V557.118H1101.39L1093.13 633.877H1002.34V302.082C1002.34 299.331 1000.97 297.955 998.216 297.955H954.472V633.877H876.062ZM1123.77 633.877V132.883H1103.96L1112.21 56.1241H1202.18V355.73L1268.21 221.196H1344.96L1257.48 398.649L1353.22 633.877H1276.46L1202.18 451.472V633.877H1123.77ZM1363.14 557.118H1439.9V633.877H1363.14V557.118Z" fill="black"/>
                        <path d="M727.738 618.692L751.998 29.0708C751.998 29.0708 748.258 12.5976 780.941 7.93453C813.625 3.27144 810.556 20.7161 810.556 20.7161L783.572 610.726C762.955 637.39 753.012 622.824 737.535 619.187C734.52 618.479 731.294 618.185 727.738 618.692Z" fill="#04D192"/>
                        <path d="M751.998 29.0708L727.738 618.692C731.294 618.185 734.52 618.479 737.535 619.187C753.012 622.824 762.955 637.39 783.572 610.726L810.556 20.7161M751.998 29.0708C751.998 29.0708 748.258 12.5976 780.941 7.93453C813.625 3.27144 810.556 20.7161 810.556 20.7161M751.998 29.0708C751.998 29.0708 751.797 41 780.941 36C810.085 31 810.556 20.7161 810.556 20.7161" stroke="black" stroke-width="13.756"/>
                        <path d="M718.242 649.525L734.181 702.806L733.994 720.973L782.153 649.477L742.604 693.668L718.242 649.525Z" fill="#D9D9D9"/>
                        <path d="M731.982 619.221L731.73 627.193L718.242 649.525M718.242 649.525L734.181 702.806L733.994 720.973L782.153 649.477M718.242 649.525L742.604 693.668L782.153 649.477M782.153 649.477L780.121 615.754" stroke="black" stroke-width="13.756"/>
                        <path d="M746.27 651.196L754.123 647.808L757.957 655.197L748.741 658.779L746.27 651.196Z" fill="#04D192"/>
                        <path d="M757.92 625.724L754.123 647.808M754.123 647.808L746.27 651.196L748.741 658.779M754.123 647.808L757.957 655.197L748.741 658.779M748.741 658.779L742.603 693.668" stroke="black" stroke-width="13.756"/>
                    </svg>
                </div>
                <div className="navbar__search">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="navbar__menu">
                    <a href="#">My List</a>
                    <a href="#">Forum</a>
                    <div className="navbar__profile">
                        <img src="profile_picture_url" alt="Profile" />
                    </div>
                </div>
            </div>
            <div className="navbar__bottom-bar"></div>
        </div>
    );
}
