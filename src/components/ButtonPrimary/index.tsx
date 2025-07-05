import "./styles.css";

type Props = {
  text: string;
};

export default function ButtonPrimary({ text }: Props) {
  return (
    <>
      <button className="dsc-btn dsc-btn-blue">{text}</button>
    </>
  );
}
