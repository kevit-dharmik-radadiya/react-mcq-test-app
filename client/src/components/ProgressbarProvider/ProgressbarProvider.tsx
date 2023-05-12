import { ReactNode, useEffect, useState } from "react";

interface ProgressbarProps {
  values: Array<number>;
  children: (value: number) => ReactNode;
}

const ProgressbarProvider = (props: ProgressbarProps) => {
  const { values, children } = props;
  const interval = 100;
  const [state, setState] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setState((state + 1) % values.length);
    }, interval);
    return () => clearTimeout(id);
  }, []);

  return <>{children(values[state])}</>;
};

export default ProgressbarProvider;
