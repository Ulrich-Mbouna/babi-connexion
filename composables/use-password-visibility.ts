import type {FormKitNode} from "@formkit/core";

export default (node:FormKitNode, e: MouseEvent) => {
    node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye';
    node.props.type = node.props.type === 'password' ? 'text' : 'password'
}
