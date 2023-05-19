interface CompanyProps {
  size: string;
  circleFill?: string;
}

const Company = ({ size, circleFill }: CompanyProps) => (
  <svg
    className="svg-icon"
    width={size}
    height={size}
    fill="#009978"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M512 322.4c-104.6 0-189.6 85-189.6 189.6s85 189.6 189.6 189.6 189.6-85 189.6-189.6-85-189.6-189.6-189.6z" />
    <path d="M784.2 252.8m-86.4 0a86.4 86.4 0 1 0 172.8 0 86.4 86.4 0 1 0-172.8 0Z" />
    <path
      d="M890.6 339.6l-3.6-8-5.8 6.6c-14.2 16-32.2 28.4-52.2 35.8l-5.6 2 2.2 5.4c17.2 41.4 26 85.4 26 130.4 0 187.4-152.4 339.8-339.8 339.8S172.2 699.4 172.2 512 324.6 172.2 512 172.2c50.8 0 99.8 11 145.6 32.8l5.4 2.6 2.4-5.4c8.4-19.6 21.6-37 38.4-50.4l6.8-5.4-7.8-4C643.2 111.6 579 96 512 96 282.6 96 96 282.6 96 512s186.6 416 416 416 416-186.6 416-416c0-60-12.6-118-37.4-172.4z"
      fill={circleFill}
      className="cls-3"
    />
  </svg>
);

Company.defaultProps = {
  circleFill: '#009978',
};

export default Company;
