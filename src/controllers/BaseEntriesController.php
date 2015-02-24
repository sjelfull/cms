<?php
/**
 * @link http://buildwithcraft.com/
 * @copyright Copyright (c) 2013 Pixel & Tonic, Inc.
 * @license http://buildwithcraft.com/license
 */

namespace craft\app\controllers;

use Craft;
use craft\app\enums\SectionType;
use craft\app\models\Entry as EntryModel;
use craft\app\web\Controller;

/**
 * Controller is a base class that any entry related controllers, such as [[EntriesController]] and
 * [[EntryRevisionsController]] extend to share common functionality.
 *
 * It extend's Yii's [[\CController]] overwriting specific methods as required.
 *
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since 3.0
 */
abstract class BaseEntriesController extends Controller
{
	// Protected Methods
	// =========================================================================

	/**
	 * Enforces all Edit Entry permissions.
	 *
	 * @param EntryModel $entry
	 *
	 * @return null
	 */
	protected function enforceEditEntryPermissions(EntryModel $entry)
	{
		$userSessionService = Craft::$app->getUser();
		$permissionSuffix = ':'.$entry->sectionId;

		if (Craft::$app->isLocalized())
		{
			// Make sure they have access to this locale
			$this->requirePermission('editLocale:'.$entry->locale);
		}

		// Make sure the user is allowed to edit entries in this section
		$this->requirePermission('editEntries'.$permissionSuffix);

		// Is it a new entry?
		if (!$entry->id)
		{
			// Make sure they have permission to create new entries in this section
			$this->requirePermission('createEntries'.$permissionSuffix);
		}
		else
		{
			switch ($entry->getClassHandle())
			{
				case 'Entry':
				{
					// If it's another user's entry (and it's not a Single), make sure they have permission to edit those
					if (
						$entry->authorId != $userSessionService->getIdentity()->id &&
						$entry->getSection()->type != SectionType::Single
					)
					{
						$this->requirePermission('editPeerEntries'.$permissionSuffix);
					}

					break;
				}

				case 'EntryDraft':
				{
					// If it's another user's draft, make sure they have permission to edit those
					if (
						$entry->getClassHandle() == 'EntryDraft' &&
						$entry->creatorId != $userSessionService->getIdentity()->id
					)
					{
						$this->requirePermission('editPeerEntryDrafts'.$permissionSuffix);
					}

					break;
				}
			}
		}
	}
}
