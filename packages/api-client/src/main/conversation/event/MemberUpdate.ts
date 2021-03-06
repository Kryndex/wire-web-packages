//
// Wire
// Copyright (C) 2017 Wire Swiss GmbH
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see http://www.gnu.org/licenses/.
//

import {ConversationEvent, ConversationEventType} from '../event/';

// https://github.com/wearezeta/backend-api-docs/wiki/API-User-Notifications#conversationmember-update-cached
interface MemberUpdate extends ConversationEvent {
  data: {
    otr_archived?: boolean; // Whether the conversation has been archived.
    otr_archived_ref?: string; // A reference point associated with the last (un)archiving.
    otr_muted?: boolean; // Whether the conversation has been muted.
    otr_muted_ref?: string; // A reference point associated with the last (un)muting.
  };
  type: ConversationEventType.MEMBER_UPDATE;
}

export default MemberUpdate;
