import React from "react";

function searchIcon({
  iconWidth,
  iconHeight,
  color,
}: {
  iconWidth?: string;
  iconHeight?: string;
  color?: string;
}) {
  return (
    <>
      <svg
        width={iconWidth ? `${iconWidth}` : "23"}
        height={iconHeight ? `${iconHeight}` : "22"}
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_148_449)">
          <path
            d="M9.14456 0.3479H9.14748V0.349158C11.6718 0.349877 13.9576 1.35537 15.6117 2.98011C17.263 4.60252 18.286 6.84526 18.2876 9.32225H18.2889V9.32818V9.33537H18.2876C18.2867 10.3337 18.1199 11.2944 17.8131 12.1903C17.7617 12.3407 17.7079 12.4851 17.6527 12.6231V12.6244C17.3882 13.2819 17.0463 13.9035 16.6379 14.476L21.9581 19.1719L21.9614 19.1747L21.9901 19.201L21.9921 19.2029C22.2925 19.4837 22.456 19.8597 22.4767 20.2413C22.4968 20.6186 22.3773 21.0045 22.1147 21.314L22.1126 21.3169L22.0806 21.3533L22.0742 21.3596L22.0475 21.3884L22.0446 21.3921C21.7583 21.6871 21.3761 21.8474 20.9872 21.8675C20.6036 21.8874 20.2103 21.7705 19.8949 21.5121L19.8922 21.5102L19.8549 21.4787L19.8495 21.4744L14.4081 16.6717C14.2472 16.7831 14.0829 16.8889 13.9166 16.9888C13.691 17.1244 13.4574 17.2521 13.2191 17.3687C11.9936 17.9691 10.6088 18.3068 9.14474 18.3068V18.3081H9.14181V18.3068C6.61749 18.3061 4.33135 17.3006 2.67725 15.6759C1.02535 14.0535 0.00292696 11.8104 0.00128055 9.33411H0V9.32818V9.32531H0.00128055C0.00201229 6.84633 1.0259 4.60126 2.68036 2.97688C4.33245 1.35537 6.61621 0.350775 9.13852 0.349158V0.3479H9.14456ZM9.14748 2.36176V2.36302H9.14456H9.13852V2.36176C7.18368 2.36302 5.41177 3.14323 4.12903 4.40239C2.84647 5.66155 2.05125 7.40342 2.0507 9.32549H2.05198V9.32836V9.33429H2.0507C2.05198 11.254 2.84592 12.9932 4.12866 14.2533C5.41085 15.5129 7.18459 16.2939 9.14163 16.2942V16.293H9.14456H9.15059V16.2942C11.1054 16.293 12.8766 15.5131 14.1597 14.2536C15.4423 12.9945 16.2375 11.2531 16.2379 9.33124H16.2368V9.32836V9.32243H16.2379C16.2368 7.40271 15.4421 5.66263 14.1601 4.40293C12.8779 3.14323 11.1047 2.3623 9.14748 2.36176Z"
            fill={color?`${color}`:"black"}
          />
        </g>
        <defs>
          <clipPath id="clip0_148_449">
            <rect
              width="22.4789"
              height="21.5217"
              fill="white"
              transform="translate(0 0.3479)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default searchIcon;
