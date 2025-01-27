import Icon from '@mdi/react';
import {mdiBookmarkOutline} from '@mdi/js';
import {mdiTrashCanOutline} from '@mdi/js';

const PostMenuActions = () => {
    return (
        <div>
            <h1 className='mt-8 mb-4 text-sm font-medium'>Actions</h1>
            <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
                <Icon path={mdiBookmarkOutline} size="20px"/>
                <span>Save this Post</span>
            </div>
            <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
                <Icon path={mdiTrashCanOutline} size="20px"/>
                <span>Delete this Post</span>
            </div>
        </div>
    )
}

export default PostMenuActions