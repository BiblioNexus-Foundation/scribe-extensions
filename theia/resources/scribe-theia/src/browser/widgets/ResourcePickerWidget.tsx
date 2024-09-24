import * as React from "@theia/core/shared/react";
import { ReactDialog } from "@theia/core/lib/browser/dialogs/react-dialog";
import { inject, injectable } from "@theia/core/shared/inversify";
import { Dialog, DialogProps } from "@theia/core/lib/browser";

@injectable()
export class ResourcePickerDialogProps extends DialogProps {}

@injectable()
export class ResourcesPickerWidget extends ReactDialog<void> {
  static readonly ID = "ResourcesPickerWidget";

  constructor(
    @inject(ResourcePickerDialogProps)
    protected override readonly props: ResourcePickerDialogProps
  ) {
    super({
      title: "Resources Picker",
    });
    this.appendAcceptButton(Dialog.OK);
    this.titleNode.className = "text-2xl font-bold";

    this.titleNode.parentElement!.className = "bg-red-500";
  }

  get value(): any {
    console.log("value");
    return "value";
  }

  render(): React.ReactNode {
    return (
      <div className="w-[900px] h-[700px]">
        <p>
          {` {"response":{"errors":[{"message":"null value found for non-nullable type: \"uuid!\"","extensions":{"path":"$","code":"validation-failed"}}],"status":200,"headers":{}},"request":{"query":"mutation addEncounter($id: uuid!, $userId: uuid!, $patientId: uuid!, $summary: String!, $wardId: uuid!, $conditions: [EncounterCondition_insert_input!] = {}, $diagnosis: [EncounterDiagnosis_insert_input!] = {}, $medications: [EncounterMedication_insert_input!] = {}, $weightInKg: String, $heightInCm: String, $legalStatus: [EncounterLegalStatus_insert_input!]! = {}, $observation: [EncounterObservation_insert_input!]!, $facilityPatientId: uuid!) {\n  added: insert_Encounter_one(\n    object: {Id: $id, UserId: $userId, LastUpdatedBy: $userId, PatientId: $patientId, Summary: $summary, WardId: $wardId, EncounterObservations: {data: $observation}, EncounterConditions: {data: $conditions, on_conflict: {constraint: EncounterCondition_pkey, update_columns: Condition}}, EncounterDiagnoses: {data: $diagnosis, on_conflict: {constraint: EncounterDiagnosis_pkey, update_columns: Diagnosis}}, EncounterMedications: {data: $medications, on_conflict: {constraint: EncounterMedication_pkey, update_columns: [AdministrationRoute]}}, EncounterLegalStatuses: {data: $legalStatus, on_conflict: {constraint: EncounterLegalStatus_pkey, update_columns: [LegalStatusType, ExpiryDate]}}, Vitals: {data: [{Id: $id, UserId: $userId, PatientId: $patientId, WeightInKg: $weightInKg, HeightInCm: $heightInCm}], on_conflict: {constraint: Vitals_pkey, update_columns: [WeightInKg, HeightInCm, UserId]}}, EncounterWards: {data: {IsCurrent: true, WardId: $wardId, CreatedBy: $userId, LastUpdatedBy: $userId}}, FacilityPatientEncounters: {data: {FacilityPatientId: $facilityPatientId}, on_conflict: {constraint: FacilityPatientEncounter_FacilityPatientId_EncounterId_key, update_columns: []}}}\n  ) {\n    Id\n    EncounterConditions {\n      Id\n      Condition\n    }\n    EncounterLegalStatuses {\n      LegalStatusType\n    }\n  }\n}","variables":{"id":"66f61be4-4a6c-4569-9baf-9bd218a28efc","userId":"d1b0397c-928e-4246-8c6f-beb6abc72fe3","patientId":"2b3779e3-fb22-481a-ba71-20bd8b95179d","summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","wardId":"8d83abd4-60f2-45f1-8018-c30f0ac964c0","medications":[],"conditions":[],"diagnosis":[],"weightInKg":"80","heightInCm":"180","observation":[{"Type":2,"CreatedBy":"d1b0397c-928e-4246-8c6f-beb6abc72fe3","UpdatedBy":"d1b0397c-928e-4246-8c6f-beb6abc72fe3","Status":"Day"},{"Type":1,"CreatedBy":"d1b0397c-928e-4246-8c6f-beb6abc72fe3","UpdatedBy":"d1b0397c-928e-4246-8c6f-beb6abc72fe3","Status":"Night"}],"legalStatus":{"IsActive":true,"ExpiryDate":"","LastUpdatedBy":"d1b0397c-928e-4246-8c6f-beb6abc72fe3","LegalStatusType":14,"CreatedBy":"d1b0397c-928e-4246-8c6f-beb6abc72fe3"},"facilityPatientId":null}}}`}
        </p>
      </div>
    );
  }
}
