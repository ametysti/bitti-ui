import { FC, useState, useEffect } from 'react';
import { Column } from '../../common';
import { useIsPlaying } from '../../hooks';
import { OfferView } from '../catalog/views/targeted-offer/OfferView';
import { GroupRoomInformationView } from '../groups/views/GroupRoomInformationView';
import { NotificationCenterView } from '../notification-center/NotificationCenterView';
import { PurseView } from '../purse/PurseView';
import { MysteryBoxExtensionView } from '../room/widgets/mysterybox/MysteryBoxExtensionView';
import { RoomPromotesWidgetView } from '../room/widgets/room-promotes/RoomPromotesWidgetView';

export const RightSideView: FC<{}> = () => {
    const { isPlaying } = useIsPlaying();

    return (
        <>
            {!isPlaying && (
                <div className="nitro-right-side animate__animated animate__backInDown">
                    <Column position="relative" gap={1}>
                        <PurseView />

                        <GroupRoomInformationView />
                        <MysteryBoxExtensionView />
                        <OfferView />
                        <RoomPromotesWidgetView />
                        <NotificationCenterView />
                    </Column>
                </div>
            )}
        </>
    );
};
