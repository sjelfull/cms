<?php
/**
 * @link      https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license   https://craftcms.com/license
 */

namespace craft\web\twig\variables;

use Craft;
use craft\helpers\ArrayHelper;
use craft\models\Section;

/**
 * Class Sections variable.
 *
 * @author     Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since      3.0
 * @deprecated in 3.0
 */
class Sections
{
    // Public Methods
    // =========================================================================

    /**
     * Returns all sections.
     *
     * @param string|null $indexBy
     *
     * @return array
     */
    public function getAllSections($indexBy = null)
    {
        Craft::$app->getDeprecator()->log('craft.sections.getAllSections()', 'craft.sections.getAllSections() has been deprecated. Use craft.app.sections.getAllSections() instead.');

        $sections = Craft::$app->getSections()->getAllSections();

        return $indexBy ? ArrayHelper::index($sections, $indexBy) : $sections;
    }

    /**
     * Returns all editable sections.
     *
     * @param string|null $indexBy
     *
     * @return array
     */
    public function getEditableSections($indexBy = null)
    {
        Craft::$app->getDeprecator()->log('craft.sections.getEditableSections()', 'craft.sections.getEditableSections() has been deprecated. Use craft.app.sections.getEditableSections() instead.');

        return Craft::$app->getSections()->getEditableSections($indexBy);
    }

    /**
     * Gets the total number of sections.
     *
     * @return integer
     */
    public function getTotalSections()
    {
        Craft::$app->getDeprecator()->log('craft.sections.getTotalSections()', 'craft.sections.getTotalSections() has been deprecated. Use craft.app.sections.totalSections instead.');

        return Craft::$app->getSections()->getTotalSections();
    }

    /**
     * Gets the total number of sections that are editable by the current user.
     *
     * @return integer
     */
    public function getTotalEditableSections()
    {
        Craft::$app->getDeprecator()->log('craft.sections.getTotalEditableSections()', 'craft.sections.getTotalEditableSections() has been deprecated. Use craft.app.sections.totalEditableSections instead.');

        return Craft::$app->getSections()->getTotalEditableSections();
    }

    /**
     * Returns a section by its ID.
     *
     * @param integer $sectionId
     *
     * @return Section|null
     */
    public function getSectionById($sectionId)
    {
        Craft::$app->getDeprecator()->log('craft.sections.getSectionById()', 'craft.sections.getSectionById() has been deprecated. Use craft.app.sections.getSectionById() instead.');

        return Craft::$app->getSections()->getSectionById($sectionId);
    }

    /**
     * Returns a section by its handle.
     *
     * @param string $handle
     *
     * @return Section|null
     */
    public function getSectionByHandle($handle)
    {
        Craft::$app->getDeprecator()->log('craft.sections.getSectionByHandle()', 'craft.sections.getSectionByHandle() has been deprecated. Use craft.app.sections.getSectionByHandle() instead.');

        return Craft::$app->getSections()->getSectionByHandle($handle);
    }
}
