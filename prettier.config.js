import base from "@mendix/pluggable-widgets-tools/configs/prettier.base.json";

export default {
    ...base,
    plugins: [require.resolve("@prettier/plugin-xml")],
};
