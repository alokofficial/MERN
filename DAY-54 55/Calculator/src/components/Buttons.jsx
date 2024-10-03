import Button from "./Button";
import React, { useState } from "react";
import Input from "./Input";

const Buttons = () => {
  const [result, setResult] = useState("");

  const handleOnClick = (value) => {
    if (value === "C") {
      setResult("");
    } else if (value === "=") {
      setResult(eval(result));
    } else {
      setResult(result + value);
    }
  };
  return (
    <>
      <Input value={result} />
      <div className="m-4 grid grid-cols-3 gap-2">
        <Button style="bg-red-700" value={"C"} onClick={handleOnClick} />
        <Button value={"1"} onClick={handleOnClick} />
        <Button value={"2"} onClick={handleOnClick} />
        <Button value={"+"} onClick={handleOnClick} />
        <Button value={"3"} onClick={handleOnClick} />
        <Button value={"4"} onClick={handleOnClick} />
        <Button value={"-"} onClick={handleOnClick} />
        <Button value={"5"} onClick={handleOnClick} />
        <Button value={"6"} onClick={handleOnClick} />
        <Button value={"*"} onClick={handleOnClick} />
        <Button value={"7"} onClick={handleOnClick} />
        <Button value={"8"} onClick={handleOnClick} />
        <Button value={"/"} onClick={handleOnClick} />
        <Button value={"9"} onClick={handleOnClick} />
        <Button value={"0"} onClick={handleOnClick} />
        <Button value={"."} onClick={handleOnClick} />
        <Button style="col-span-2 bg-green-700" value={"="} onClick={handleOnClick} />
      </div>
    </>
  );
};

export default Buttons;
