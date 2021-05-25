/* eslint-disable max-len */
import React from 'react';

const Vectors = (props) => {
  const {
    name, className,
  } = props;
  switch (name) {
    case 'plastic':
      return (
        <svg width="667" height="609" viewBox="0 0 667 609" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
            <path d="M332.5 330L330.704 342.211C330.238 345.381 329.241 348.45 327.754 351.288C325.616 355.369 324.5 359.906 324.5 364.512V376.736C324.5 378.909 324.657 381.079 324.971 383.23L326.771 395.574C327.563 401.004 330.312 405.956 334.5 409.5L340.201 414.441C341.383 415.465 342.303 416.758 342.884 418.211C344.192 421.481 347.154 423.799 350.643 424.284L360.061 425.592C362.014 425.863 363.992 425.913 365.956 425.74L397.847 422.936C404.852 422.321 411.614 420.072 417.592 416.371L429.769 408.833C436.472 404.684 441.967 398.847 445.705 391.906L456.137 372.531C457.042 370.851 458.157 369.292 459.456 367.893C462.421 364.7 464.394 360.714 465.135 356.419L468.397 337.495C468.798 335.169 469 332.813 469 330.453V312.954C469 308.368 466.465 304.158 462.412 302.012C461.147 301.343 460.008 300.458 459.044 299.399L455.5 295.5C450.961 291.61 445.262 289.332 439.293 289.022L416.402 287.833C412.155 287.612 407.899 287.994 403.76 288.968L401.5 289.5L382 292L364.363 294.871C361.793 295.29 359.266 295.938 356.812 296.809L351.578 298.666C347.28 300.191 343.501 302.899 340.675 306.478C338.582 309.13 337.066 312.191 336.227 315.464L332.5 330Z" stroke="#062433" strokeWidth="4" />
            <path d="M230.5 441L198.248 444.77C194.144 445.249 190.217 446.716 186.803 449.043C183.005 451.633 179.974 455.199 178.03 459.365L175.951 463.819C174.654 466.599 173.655 469.507 172.969 472.497L168.5 492L163.167 511.048C162.061 514.997 161.5 519.08 161.5 523.181V549.368C161.5 555.902 163.861 562.215 168.148 567.145L170.538 569.894C171.174 570.625 171.667 571.468 171.993 572.38C173.177 575.695 176.439 577.801 179.947 577.514L223 574H232.855C241.125 574 249.235 571.721 256.294 567.414L264.754 562.252C271.467 558.156 276.99 552.371 280.771 545.476L283.5 540.5L297.622 515.229C300.821 509.505 302.5 503.057 302.5 496.5L305 463.5V460.692C305 457.816 303.375 455.188 300.803 453.902C299.622 453.311 298.615 452.422 297.882 451.322L296.096 448.644C292.865 443.798 287.658 440.629 281.869 439.985L264.684 438.076C261.239 437.693 257.763 437.71 254.322 438.125L230.5 441Z" stroke="#062433" strokeWidth="4" />
            <path d="M341.414 159.26L339.942 160.29C338.337 161.414 337.019 162.901 336.097 164.63C334.443 167.731 334.177 171.387 335.365 174.694L339.273 185.583C340.089 187.856 341.117 190.047 342.343 192.128L357 217L359.51 222.213C362.143 227.681 365.855 232.56 370.422 236.557L371.323 237.345C376.697 242.047 383.113 245.403 390.041 247.135L397.5 249L419.845 258.016C423.926 259.663 428.227 260.702 432.61 261.101L443.9 262.127C446.595 262.372 449.31 261.976 451.823 260.971L452.09 260.864C452.696 260.622 453.283 260.335 453.847 260.006C457.124 258.094 459.426 254.871 460.17 251.15L460.462 249.689C461.137 246.314 460.745 242.812 459.339 239.669L454.752 229.415C453.587 226.811 452.176 224.323 450.54 221.986L441.129 208.541C439.712 206.517 438.464 204.38 437.398 202.151L431.781 190.407C429.284 185.185 425.802 180.493 421.528 176.59L416.5 172L411.467 168.405C405.576 164.197 398.757 161.473 391.588 160.463L367 157L354.89 155.758C350.123 155.269 345.34 156.512 341.414 159.26Z" stroke="#062433" strokeWidth="4" />
            <path d="M530 142.5L503.63 151.729C501.22 152.573 498.93 153.726 496.817 155.16C489.929 159.834 485.339 167.202 484.18 175.445L481.5 194.5V228.482C481.5 231.155 481.738 233.823 482.212 236.454L483.742 244.954C485.205 253.084 489.344 260.492 495.5 266C499.591 270.721 505.668 273.238 511.899 272.793L523 272L542.5 269.5L557.374 267.021C561.405 266.349 565.229 264.765 568.554 262.39C569.849 261.465 571.223 260.657 572.661 259.976L590.416 251.566C596.076 248.885 601.115 245.051 605.209 240.311L605.618 239.837C607.535 237.618 609.23 235.216 610.679 232.667L617.118 221.344C620.973 214.565 623 206.899 623 199.101V194.5V178.715C623 174.927 622.422 171.161 621.286 167.547C618.831 159.734 613.868 152.948 607.167 148.239L604.495 146.361C600.856 143.805 596.822 141.865 592.553 140.62C588.87 139.545 585.052 139 581.216 139H551.584C548.536 139 545.496 139.31 542.51 139.924L530 142.5Z" stroke="#062433" strokeWidth="4" />
            <path d="M345.5 234L342.977 226.431C342.667 225.501 342.07 224.693 341.273 224.123C339.874 223.125 338.039 222.981 336.502 223.749L336.215 223.893C334.814 224.593 333.807 225.89 333.474 227.42L331.5 236.5L331.197 237.813C330.406 241.242 330.244 244.787 330.719 248.275L331.01 250.408C331.334 252.78 332.121 255.064 333.326 257.131C334.433 259.028 335.873 260.71 337.578 262.094L350.083 272.255C350.693 272.751 351.343 273.196 352.026 273.586C353.66 274.52 355.46 275.125 357.326 275.369L361.76 275.947C364.577 276.314 367.428 276.357 370.255 276.075L378.673 275.233C380.221 275.078 381.749 274.77 383.235 274.312L386.812 273.212C387.267 273.072 387.691 272.848 388.062 272.551C389.238 271.609 389.743 270.059 389.347 268.605L389.173 267.969C388.753 266.427 387.589 265.196 386.072 264.691L382.5 263.5L374.292 260.288C372.121 259.439 370.149 258.149 368.5 256.5L349.853 240.022C347.975 238.361 346.488 236.305 345.5 234Z" stroke="#062433" strokeWidth="4" />
            <path d="M326 114V105.908C326 102.978 326.31 100.055 326.924 97.1895C328.289 90.8189 331.131 84.8579 335.221 79.7864L341.5 72L352.091 60.3839C355.343 56.8179 359.146 53.798 363.357 51.4401L382 41L401.86 32.2895C407.558 29.7903 413.713 28.5 419.935 28.5H422.794C429.82 28.5 436.734 30.2558 442.909 33.6078L446.223 35.4067C449.371 37.1154 452.112 39.4833 454.261 42.3486C456.072 44.7627 457.429 47.486 458.265 50.3855L462.737 65.8885C463.907 69.9427 464.5 74.1412 464.5 78.3607V88.5776C464.5 92.5089 463.985 96.4233 462.968 100.221L458.471 117.009C457.503 120.624 455.736 123.975 453.301 126.816C451.774 128.596 450.005 130.154 448.046 131.441L439.689 136.933C435.59 139.626 431.08 141.631 426.335 142.869L416.086 145.543C412.377 146.51 408.56 147 404.727 147H392.441C390.15 147 387.863 146.825 385.599 146.477L352.61 141.401C350.896 141.138 349.274 140.456 347.888 139.416C346.645 138.483 345.623 137.288 344.896 135.915L343.856 133.95C342.407 131.212 339.562 129.5 336.464 129.5C334.246 129.5 332.119 128.619 330.55 127.05L329.5 126C327.259 123.759 326 120.72 326 117.55V114Z" stroke="#062433" strokeWidth="4" />
            <path d="M215.5 304.5L201.694 300.867C198.391 299.998 194.873 300.585 192.031 302.479C190.055 303.796 188.517 305.673 187.613 307.869L186.877 309.656C185.968 311.864 185.5 314.229 185.5 316.616V323.038C185.5 329.278 186.798 335.449 189.311 341.161L196.5 357.5L203.135 371.535C207.268 380.278 214.108 387.458 222.642 392.009L232 397L264.794 409.68C267.904 410.883 271.211 411.5 274.546 411.5H280.09C287.61 411.5 294.398 406.993 297.316 400.062C299.345 395.243 299.263 389.794 297.089 385.038L284.5 357.5L274.873 341.455C271.338 335.563 266.501 330.559 260.732 326.827L247.615 318.339C245.21 316.783 242.663 315.461 240.007 314.389L215.5 304.5Z" stroke="#062433" strokeWidth="4" />
            <path d="M185 375.48V371.73C185 370.649 184.46 369.64 183.561 369.04C182.596 368.397 181.36 368.32 180.322 368.839L179.528 369.236C178.54 369.73 177.755 370.552 177.306 371.561L176.598 373.156C176.201 374.047 175.943 374.993 175.831 375.962L174.125 390.747C173.397 397.061 174.835 403.435 178.203 408.825C179.725 411.261 181.613 413.448 183.799 415.31L184.737 416.109C190.746 421.228 198.269 424.231 206.15 424.657L207.955 424.754C210.976 424.918 214.005 424.749 216.989 424.252L226.692 422.635C227.223 422.546 227.725 422.331 228.156 422.008C229.002 421.374 229.5 420.377 229.5 419.32V419.041C229.5 418.359 229.322 417.689 228.984 417.096L228.671 416.55C227.916 415.228 226.707 414.226 225.269 413.728L218.322 411.323C215.789 410.446 213.408 409.181 211.264 407.573L207.058 404.419C205.355 403.141 203.744 401.744 202.239 400.239L193.709 391.709C191.582 389.582 189.79 387.145 188.395 384.48L186.169 380.232C185.401 378.766 185 377.135 185 375.48Z" stroke="#062433" strokeWidth="4" />
            <path d="M100.86 443.566L101.179 443.035C102.342 441.096 104.247 439.718 106.452 439.22L113.086 437.722C116.649 436.918 120.348 436.931 123.905 437.761L124.842 437.98C130.479 439.295 135.578 442.303 139.456 446.6L146.356 454.246C150.037 458.324 152.429 463.399 153.235 468.833L153.371 469.756C153.787 472.561 153.678 475.419 153.049 478.183L149.73 492.789C149.303 494.667 147.633 496 145.708 496C144.328 496 143.04 495.311 142.275 494.163L141.015 492.272C140.673 491.759 140.388 491.209 140.167 490.634L136.945 482.258C135.984 479.758 134.801 477.348 133.41 475.058L131.01 471.105C128.361 466.742 124.902 462.926 120.818 459.864L119.659 458.994C116.578 456.684 113.106 454.948 109.409 453.869L104.154 452.337C103.393 452.115 102.686 451.738 102.076 451.23C100.761 450.134 100 448.51 100 446.797V446.672C100 445.578 100.297 444.504 100.86 443.566Z" stroke="#062433" strokeWidth="4" />
            <path d="M661.607 531.953C661.501 532.486 661.501 532.486 661.607 531.953" stroke="#062433" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M641.609 509.937C642.002 509.414 642.394 508.891 642.786 508.368C642.954 508.144 643.57 507.691 643.29 507.696C643.01 507.7 642.954 508.144 642.786 508.368C642.394 508.891 642.002 509.414 641.609 509.937Z" stroke="#062433" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M190.264 181.898C191.641 180.796 191.641 180.796 190.264 181.898" stroke="#062433" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="195" y1="178.5" x2="196" y2="178.5" stroke="#062433" />
            <g filter="url(#filter1_d)">
              <path d="M10 399.033V411.69C10 413.536 9.55082 415.353 8.69125 416.987C6.47317 421.201 7.11596 426.351 10.3019 429.891L28.5857 450.206C30.3869 452.208 33.5437 452.148 35.2674 450.079C36.3307 448.803 38.0196 448.231 39.6396 448.598L59.1244 453.009C62.0309 453.667 64.8473 454.674 67.5127 456.006L89.5 467L100.049 473.826C104.323 476.592 108.138 480.01 111.353 483.956C115.411 488.936 118.444 494.669 120.278 500.826L124.5 515L132.484 550.483C133.116 553.295 132.264 556.236 130.226 558.274C127.029 561.471 126.933 566.623 130.007 569.937L146.979 588.236C153.05 594.781 161.573 598.5 170.5 598.5H202.227C208.031 598.5 213.791 597.489 219.249 595.513L235.119 589.767C238.364 588.592 241.479 587.084 244.414 585.267L264.023 573.129C268.97 570.066 273.344 566.164 276.949 561.598L286.5 549.5L299.736 530.649C301.905 527.56 303.717 524.234 305.138 520.737L307.593 514.693C308.861 511.572 309.81 508.331 310.427 505.02L317.5 467C320.791 452.04 333.212 440.816 348.427 439.052L357.5 438L400.467 434.608C409.644 433.883 418.443 430.64 425.894 425.234L432.812 420.215C437.567 416.765 441.677 412.505 444.953 407.628L461.5 383L472.824 361.414C475.91 355.53 477.793 349.091 478.363 342.471L481.5 306C483.937 294.728 492.722 285.911 503.985 283.433L510.5 282L568.165 270.467C574.657 269.169 580.827 266.594 586.316 262.892L599.5 254L618.08 238.187C621.346 235.407 624.242 232.219 626.694 228.7L629.149 225.178C632.685 220.103 635.25 214.417 636.712 208.406L639 199L641.139 183.724C642.038 177.303 641.679 170.768 640.083 164.484L634.726 143.391C634.576 142.799 634.5 142.191 634.5 141.581C634.5 139.321 633.46 137.186 631.68 135.793L623 129L604.477 114.812C601.534 112.558 597.45 112.537 594.485 114.761C592.587 116.185 590.169 116.725 587.846 116.244L568.05 112.148C564.362 111.385 560.772 110.208 557.348 108.639L542.689 101.92C539.929 100.655 536.928 100 533.892 100C529.724 100 525.649 98.7662 522.181 96.4542L511.926 89.6175C507.34 86.5602 503.291 82.7657 499.943 78.3875L498.5 76.5L485.215 61.2618C482.746 58.4296 480.604 55.3282 478.83 52.0161L467.719 31.2761C466.919 29.7819 466.5 28.113 466.5 26.4178C466.5 22.2348 463.967 18.4682 460.093 16.8899L456 15.2224C454.018 14.4148 452.208 13.2373 450.666 11.7527L444.728 6.03393C441.637 3.0579 436.943 2.50423 433.245 4.67957C431.775 5.54412 430.101 6 428.396 6H412.018C407.034 6 402.078 6.74526 397.314 8.21105L387.071 11.3628C381.402 13.107 376.089 15.8459 371.38 19.4514L346.5 38.5L326.37 58.9962C321.51 63.9446 317.732 69.85 315.278 76.337L313.673 80.5798C312.56 83.52 311.727 86.5587 311.185 89.6553L309.549 99.008C308.859 102.95 309.083 106.998 310.203 110.84L310.515 111.909C311.491 115.253 311.643 118.784 310.96 122.2L310.196 126.019C309.147 131.263 305.369 135.544 300.295 137.235C298.775 137.742 297.183 138 295.581 138H282.876C278.642 138 274.426 138.538 270.328 139.6L254.6 143.678C251.209 144.557 247.921 145.79 244.788 147.356L234.326 152.587C231.118 154.191 228.092 156.136 225.3 158.387L198.5 180L184.505 193.995C180.857 197.643 177.796 201.834 175.429 206.418L173.849 209.479C171.957 213.146 170.526 217.032 169.588 221.05L167.5 230L163.442 268.324C163.153 271.054 162.107 273.648 160.422 275.815C157.632 279.402 153.342 281.5 148.798 281.5H142.5H129.115C122.439 281.5 115.831 282.837 109.68 285.432L92.9239 292.501C88.9908 294.16 85.2864 296.316 81.9011 298.917L56.2422 318.626C53.7529 320.538 51.4492 322.68 49.3617 325.024L27.9702 349.042C25.3328 352.004 23.057 355.268 21.1908 358.767L18.954 362.961C16.9924 366.639 15.4984 370.548 14.5068 374.597L11.4351 387.14C10.4818 391.033 10 395.026 10 399.033Z" stroke="#062433" strokeWidth="5" strokeMiterlimit="3.8637" />
            </g>
            <path d="M34.0956 383.283L31.7163 401.128C30.6307 409.27 33.2793 417.467 38.924 423.434C44.3689 429.19 52.0514 432.288 59.9661 431.92L108.634 429.657C110.871 429.553 113.089 429.198 115.247 428.601L132.182 423.911C140.052 421.732 146.693 416.439 150.573 409.254L155.66 399.833C157.21 396.963 158.281 393.861 158.832 390.647L166.109 348.2C166.698 344.76 166.683 341.243 166.064 337.808L163.154 321.673C162.094 315.796 158.761 310.573 153.878 307.136C150.053 304.445 145.49 303 140.813 303H134.171C131.404 303 128.649 303.383 125.987 304.138L102.069 310.921C98.3902 311.964 94.9449 313.701 91.9185 316.038L60.9806 339.926C58.3452 341.961 56.067 344.421 54.2394 347.204L38.7564 370.78C36.2839 374.545 34.6909 378.818 34.0956 383.283Z" stroke="#062433" strokeWidth="4" />
            <path d="M194.75 274.5L190.6 268.967C189.908 268.043 188.821 267.5 187.667 267.5C185.642 267.5 184 265.858 184 263.833V248.904C184 247.638 184.129 246.375 184.386 245.136L185.774 238.428C186.588 234.494 187.925 230.686 189.749 227.107L198.16 210.61C199.384 208.208 200.822 205.921 202.456 203.777L208.961 195.239C213.578 189.179 219.658 184.39 226.632 181.322L228.5 180.5L247.836 169.25C253.22 166.117 259.196 164.137 265.385 163.434L288.269 160.833C295.754 159.982 303.258 162.264 309.002 167.138C313.848 171.25 317.107 176.924 318.216 183.182L321.963 204.329C322.978 210.055 322.873 215.924 321.655 221.61L320.5 227L315.081 252.012C314.363 255.324 313.233 258.534 311.717 261.565L310.164 264.673C308.089 268.822 304.988 272.372 301.155 274.985C297.762 277.298 293.89 278.814 289.828 279.417L264.127 283.238C260.72 283.744 257.267 283.858 253.834 283.577L228.5 281.5H208.75C203.242 281.5 198.055 278.907 194.75 274.5Z" stroke="#062433" strokeWidth="4" />
            <path d="M432.618 151H421.752C421.584 151 421.417 151.015 421.252 151.045C418.401 151.563 418.119 155.54 420.867 156.456L427.473 158.658C428.149 158.883 428.762 159.262 429.265 159.765L434.019 164.519C435.998 166.498 437.718 168.721 439.138 171.134L440.185 172.915C441.393 174.968 442.436 177.115 443.304 179.333L446.5 187.5L452.089 201.007C452.356 201.652 452.823 202.194 453.421 202.553L453.76 202.756C454.529 203.218 455 204.049 455 204.946C455 206.357 456.143 207.5 457.554 207.5H460.297C461.398 207.5 462.463 207.114 463.308 206.41C464.38 205.517 465 204.193 465 202.797V200.5L466.493 187.807C466.829 184.951 466.739 182.062 466.224 179.233C465.419 174.805 463.594 170.625 460.894 167.025L460.418 166.391C458.484 163.812 456.174 161.536 453.566 159.639L446.5 154.5C442.233 152.203 437.463 151 432.618 151Z" stroke="#062433" strokeWidth="4" />
            <path d="M479.361 82.2824L480.16 81.6166C480.986 80.9287 482.122 80.7487 483.119 81.1478C483.692 81.3767 484.177 81.7806 484.506 82.3018L488.828 89.1437C489.605 90.3743 490.562 91.4816 491.667 92.4288C492.881 93.4692 494.257 94.3029 495.742 94.8966L497.965 95.7858C501.617 97.2467 504.934 99.4342 507.716 102.216L509 103.5L513.826 107.637C515.273 108.877 516.821 109.993 518.455 110.973L519.801 111.781C522.249 113.249 524.931 114.286 527.73 114.846L530.024 115.305C530.672 115.434 531.299 115.65 531.89 115.945L533.456 116.728C535.015 117.508 536 119.101 536 120.844C536 122.21 535.393 123.506 534.344 124.38L533.862 124.782C533.292 125.257 532.639 125.62 531.936 125.855L527 127.5L517.4 129.74C513.827 130.574 510.137 130.785 506.492 130.364C501.565 129.796 496.839 128.087 492.688 125.373L488.935 122.919C486.982 121.642 485.149 120.192 483.458 118.585L478.038 113.436C476.702 112.167 475.722 110.572 475.192 108.808C474.737 107.289 474.628 105.687 474.876 104.12L476 97L476.858 87.9945C476.952 87.0042 477.199 86.0345 477.591 85.1202L478.058 84.0303C478.349 83.3531 478.795 82.7541 479.361 82.2824Z" stroke="#062433" strokeWidth="4" />
            <path d="M254.5 308.719V308.561C254.5 307.882 254.77 307.23 255.25 306.75C255.73 306.27 256 305.618 256 304.939V301.339C256 300.783 256.09 300.231 256.265 299.704C256.733 298.302 257.777 297.167 259.135 296.585L262.94 294.954C263.646 294.652 264.374 294.406 265.119 294.22L270.781 292.805C274.247 291.938 277.807 291.5 281.38 291.5H283.974C286.313 291.5 288.641 291.826 290.891 292.469C293.284 293.152 295.562 294.187 297.652 295.539L299.17 296.522C301.714 298.168 304.048 300.118 306.12 302.328L307.405 303.699C309.457 305.888 311.182 308.363 312.524 311.048L312.962 311.924C314.31 314.62 315.17 317.533 315.503 320.529C315.832 323.487 315.641 326.479 314.94 329.371L312.3 340.263C312.101 341.085 312 341.927 312 342.773V345.349C312 345.773 311.874 346.189 311.639 346.542C311.24 347.14 310.568 347.5 309.849 347.5H308.012C307.343 347.5 306.679 347.38 306.052 347.145L305.437 346.914C303.843 346.316 302.447 345.289 301.402 343.946L299.5 341.5L289.743 329.71C288.252 327.909 286.565 326.281 284.712 324.855C282.251 322.962 279.522 321.446 276.615 320.356L265 316L256.078 311.326C255.108 310.818 254.5 309.814 254.5 308.719Z" stroke="#062433" strokeWidth="4" />
          </g>
          <path d="M279.942 422.504L233.36 428.975C232.521 429.092 231.769 429.554 231.287 430.251C229.898 432.258 231.335 435 233.776 435H287.563C292.457 435 297.282 433.849 301.648 431.641L315.692 424.539C318.948 422.893 321 419.555 321 415.907C321 408.215 312.457 403.6 306.024 407.817L288.549 419.272C285.954 420.973 283.015 422.077 279.942 422.504Z" fill="#BABEC1" fillOpacity="0.3" />
          <path d="M476 238.071V222.926C476 218.226 471.82 214.627 467.173 215.324C461.81 216.129 458.943 222.084 461.661 226.777L465.3 233.064C466.414 234.987 467 237.17 467 239.392V242.206C467 250.436 462.622 258.045 455.507 262.182L446.483 267.429C445.83 267.808 445.225 268.264 444.68 268.787C439.449 273.808 441.553 282.603 448.49 284.714L453.129 286.126C455.016 286.7 456.737 287.718 458.149 289.095L461.502 292.364C468.642 299.326 480.501 297.261 484.868 288.297C485.288 287.434 485.792 286.615 486.373 285.852L486.689 285.436C491.693 278.852 492.11 269.861 487.737 262.841L479.135 249.032C477.086 245.743 476 241.946 476 238.071Z" fill="#BABEC1" fillOpacity="0.3" />
          <path d="M321.093 132.517L314.779 134.727C314.312 134.891 314 135.331 314 135.825C314 136.242 313.776 136.628 313.414 136.835L301.701 143.528C300.59 144.163 299.686 145.103 299.094 146.236L297.474 149.342C295.892 152.373 298.091 156 301.51 156C302.478 156 303.421 156.309 304.202 156.881L314.885 164.715C316.909 166.2 319.353 167 321.863 167C325.139 167 328.268 165.638 330.5 163.24L333.432 160.092C337.901 155.291 344.304 152.772 350.847 153.239L389.5 156L412.715 160.939C412.904 160.98 413.098 161 413.291 161C415.404 161 416.739 158.731 415.713 156.884L414.17 154.106C413.436 152.786 412.106 151.905 410.604 151.745L347.891 145.074C344.59 144.722 341.774 142.528 340.626 139.413C339.611 136.658 337.279 134.598 334.42 133.931L326.999 132.2C325.04 131.743 322.992 131.853 321.093 132.517Z" fill="#BABEC1" fillOpacity="0.3" />
          <path d="M179.658 277.329L180.044 277.283C184.223 276.776 188.451 277.705 192.033 279.917L195.89 282.3C200.865 285.372 206.597 287 212.445 287H224.5H252L306.5 280.5L307.56 280.288C310.667 279.667 312.887 283.225 310.962 285.742C310.352 286.54 309.422 287.031 308.418 287.085L268.214 289.247C265.1 289.414 262.047 290.175 259.219 291.488L253.373 294.202C250.904 295.348 249.026 297.474 248.193 300.065C246.466 305.44 240.549 308.23 235.302 306.144L211.227 296.572C206.165 294.56 200.663 293.917 195.274 294.71L190.703 295.382C187.956 295.786 185.378 296.952 183.261 298.748L178.525 302.767C174.051 306.563 167.243 305.459 164.198 300.443C162.516 297.673 162.355 294.239 163.771 291.324L165.749 287.251C168.399 281.796 173.637 278.059 179.658 277.329Z" fill="#BABEC1" fillOpacity="0.3" />
          <path d="M402.203 13.8284L384.88 19.0573C377.472 21.2935 370.746 25.3609 365.326 30.8837L347.682 48.8607C347.245 49.3061 347 49.9051 347 50.5291C347 52.4356 349.128 53.5695 350.711 52.506L371.079 38.8156L380.319 32.4767C387.374 27.6374 395.728 25.0473 404.283 25.0473H408.812C409.161 25.0473 409.509 25.0057 409.849 24.9235C413.639 24.0059 414.46 18.9817 411.159 16.9059L407.374 14.5261C405.832 13.5566 403.947 13.3021 402.203 13.8284Z" fill="#BABEC1" fillOpacity="0.3" />
          <path d="M570.629 123.147L559.404 124.893C556.805 125.297 554.243 125.906 551.74 126.713L540.317 130.398C540.106 130.466 539.905 130.559 539.718 130.676L535.216 133.49C533.674 134.454 534.589 136.837 536.38 136.521C536.46 136.507 536.541 136.499 536.622 136.497L583.103 135.24C588.967 135.082 594.797 136.178 600.203 138.454C607.261 141.426 613.351 146.306 617.789 152.548L619.069 154.347C624.257 161.643 627.345 170.221 627.999 179.149L628.164 181.407C628.387 184.462 628.33 187.532 627.991 190.577L625.5 213C625.5 215.406 628.702 216.236 629.871 214.133L630.313 213.336C630.437 213.113 630.527 212.873 630.58 212.624L634.52 194.138C636.15 186.486 635.963 178.558 633.972 170.992L631.315 160.896C628.517 150.263 622.291 140.848 613.602 134.11L612.963 133.614C606.106 128.296 597.983 124.855 589.393 123.628L585.385 123.055C580.489 122.356 575.516 122.386 570.629 123.147Z" fill="#BABEC1" fillOpacity="0.3" />
          <path d="M171.5 346L173.485 337.775C174.215 334.753 177.751 333.405 180.308 335.175C181.082 335.711 181.666 336.48 181.973 337.371L185.004 346.163C185.951 348.908 185.613 351.932 184.085 354.401L182.773 356.52C181.153 359.137 177.932 360.276 175.027 359.26C172.098 358.234 170.287 355.296 170.689 352.218L171.5 346Z" fill="#BABEC1" fillOpacity="0.15" />
          <path d="M179.341 417.644L176.787 415.601C173.177 412.713 167.793 414.355 166.409 418.766C165.675 421.104 163.701 422.84 161.287 423.269L153.654 424.626C150.251 425.231 148.298 428.846 149.656 432.023C150.198 433.292 151.207 434.303 152.475 434.848L164.408 439.972C168.845 441.878 173.786 438.623 173.786 433.793V433.154C173.786 430.692 175.335 428.496 177.656 427.671C181.952 426.144 182.902 420.493 179.341 417.644Z" fill="#BABEC1" fillOpacity="0.3" />
          <defs>
            <filter id="filter0_d" x="0.882812" y="0.859375" width="665.225" height="608.141" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <filter id="filter1_d" x="0.882812" y="0.859375" width="647.239" height="608.141" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>

      );
    case 'arrow-left':
      return (
        <svg className={className} width="256" height="146" viewBox="0 0 256 146" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="55.3027" y="41" width="200.698" height="67.6292" rx="6" fill="white" />
          <path d="M6.3884 77.897C3.2411 75.5083 3.23199 70.7762 6.37004 68.362L72.7945 17.26C76.737 14.2269 82.437 17.0192 82.4466 21.9883L82.6424 123.653C82.652 128.622 76.9628 131.461 73.0087 128.459L6.3884 77.897Z" fill="white" />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg className={className} width="259" height="148" viewBox="0 0 259 148" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="201.604" y="106.319" width="200.698" height="67.6292" rx="6" transform="rotate(-179.009 201.604 106.319)" fill="white" />
          <path d="M251.149 70.2734C254.255 72.7162 254.182 77.4476 251.003 79.8072L183.705 129.753C179.71 132.718 174.059 129.827 174.136 124.859L175.698 23.2058C175.774 18.2372 181.512 15.4975 185.413 18.5665L251.149 70.2734Z" fill="white" />
        </svg>
      );
    case 'wave-tilt-left':
      return (
        <svg className={className} width="1440" height="1024" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 459L0 1023V0C108.805 126.444 189.611 132.059 308.5 0C451.596 141.333 554.5 125 684.5 0C831.011 165.552 910.782 103.94 1052.5 0C1246.69 181.825 1318.55 135.132 1440 0V459Z" fill="#64A8C8" />
        </svg>
      );
    case 'wave-bottom':
      return (
        <svg width="1450" height="362" viewBox="0 0 1430 362" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1430 402H-10V201V0C98.805 110.742 179.611 115.66 298.5 0C441.596 123.782 544.5 109.477 674.5 0C821.011 144.993 900.782 91.0326 1042.5 0C1236.69 159.245 1308.55 118.351 1430 0V402Z" fill="#64A8C8" />
        </svg>
      );
    default:
      break;
  }
  return null;
};

export default Vectors;
