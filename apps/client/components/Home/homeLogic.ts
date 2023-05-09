import {postVisitor} from "@lib/system-design";

export const HomeLogic = () => {
  const onFetch = async (data) => {
    const res = await postVisitor(data);
    return res;
  };

  return {onFetch};

}


