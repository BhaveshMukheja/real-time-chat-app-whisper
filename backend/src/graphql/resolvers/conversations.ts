import { PrismaClient } from "@prisma/client";
import { GraphQLError } from "graphql";
import { withFilter } from "graphql-subscriptions";
import { userIsConversationParticipant } from "../../util/functions";
import {
  ConversationPopulated,
  ConversationUpdatedSubscriptionData,
  ConversationCreatedSubscriptionPayload,
  ConversationDeletedSubscriptionPayload,
  GraphQLContext,
} from "../../util/types";

const resolvers = {
  // Your resolver functions remain the same.
};

// Updated population objects with types
export const participantPopulated = {
  user: {
    select: {
      id: true,
      username: true,
    },
  },
};

export const conversationPopulated = {
  participants: {
    include: participantPopulated,
  },
  latestMessage: {
    include: {
      sender: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  },
};

export default resolvers;
