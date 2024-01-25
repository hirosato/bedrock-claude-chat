import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { BedrockChatStack } from "../lib/bedrock-chat-stack";

test("SnapshotTest", () => {
  const app = new cdk.App();
  const stack = new BedrockChatStack(app, "MyTestStack", {
    bedrockRegion: "us-west-2",
    bedrockEndpointUrl: "https://bedrock.us-west-2.amazonaws.com",
  });
  const template = Template.fromStack(stack).toJSON();

  expect(template).toMatchSnapshot();
});
