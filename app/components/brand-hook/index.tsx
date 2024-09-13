type BrandHookProps = {
  hook: string;
};

const BrandHook = ({ hook }: BrandHookProps) => {
  return <div className="text-center font-light md:w-4/5 w-full ">{hook}</div>;
};

export default BrandHook;
