import { FC, SVGProps } from 'react';
import { theme } from '@chakra-ui/theme';

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  stroke?: string;
  fill?: string;
}

const defaultLineIconProps: IconProps = {
  size: 24,
  fill: 'none',
  stroke: theme.colors.gray[700],
};

const defaultSolidIconProps: IconProps = {
  size: 24,
  fill: theme.colors.gray[700],
  stroke: theme.colors.white,
};

export const CheckedIconSolid: FC<IconProps> = ({ size, fill, stroke }) => {
  return (
    <svg
      stroke={stroke}
      fill={fill}
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
    </svg>
  );
};
CheckedIconSolid.defaultProps = defaultSolidIconProps;

export const MinusIconSolid: FC<IconProps> = ({ size, fill, stroke }) => {
  return (
    <svg
      stroke={stroke}
      fill={fill}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};
MinusIconSolid.defaultProps = defaultSolidIconProps;

export const ErrorIconSolid: FC<IconProps> = ({ size, fill, stroke }) => {
  return (
    <svg
      stroke={stroke}
      fill={fill}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"></path>
    </svg>
  );
};
ErrorIconSolid.defaultProps = defaultSolidIconProps;

export const CompletedIcon: FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.71428C6.48 2.71428 2 7.19428 2 12.7143C2 18.2343 6.48 22.7143 12 22.7143C17.52 22.7143 22 18.2343 22 12.7143C22 7.19428 17.52 2.71428 12 2.71428ZM10 17.7143L5 12.7143L6.41 11.3043L10 14.8843L17.59 7.29428L19 8.71428L10 17.7143Z"
        fill="#38A169"
      />
    </svg>
  );
};
CompletedIcon.defaultProps = defaultLineIconProps;

export const DoubleArrowSortIcon = ({ isSortedDesc = true }) => {
  const activeColor = theme.colors.purple[700];
  const inactiveColor = theme.colors.gray[300];

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6L16 10H8L12 6Z"
        fill={isSortedDesc ? inactiveColor : activeColor}
      />
      <path
        d="M12 18L8 14H16L12 18Z"
        fill={isSortedDesc ? activeColor : inactiveColor}
      />
    </svg>
  );
};

export const NoContentLineIcon: FC<IconProps> = ({ size = 256, stroke }) => {
  return (
    <svg
      stroke={stroke}
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"></path>
    </svg>
  );
};

CheckedIconSolid.defaultProps = { size: 256, ...defaultSolidIconProps };
