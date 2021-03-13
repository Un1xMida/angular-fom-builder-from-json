import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular';
  old = {};
  fields = [
    {
      FieldType: 'input',
      TemplateType: 'text',
      EnPlaceholder: null,
      ArPlaceholder: null,
      Validations: [
        { name: 'required', value: true, message: 'field is required' },
        { name: 'maxlength', value: 20, message: 'maxLength not valid' },
        { name: 'minlength', value: 10, message: 'minLength not valid' },
        { name: 'regex', value: '^[a-zA-Z]+$', message: 'regex not valid ' },
      ],
      HasAttachments: false,
      HasNotes: false,
      ResponsibleUnit: null,
      SeverityLevel: null,
      Id: '666b2d9a-d008-468d-99ab-150c62a2273b',
      TemplateQuestionId: null,
      EnLabel: 'text input1',
      ArLabel: 'text input1',
      FieldOrder: 1,
      SectionId: null,
      ConditionalView: {
        Action: 'hidden',
        Operator: 'and',
      },
      VisibilityView: [],
    },
    {
      FieldType: 'input',
      TemplateType: 'number',
      Decimal: null,
      Representation: 'NUMBER',
      EnPlaceholder: null,
      ArPlaceholder: null,
      HasAttachments: false,
      HasNotes: false,
      ResponsibleUnit: null,
      SeverityLevel: null,
      Validations: [
        { name: 'min', value: 5, message: 'invalid min value' },
        { name: 'max', value: 10, message: 'invalid max value' },
      ],
      Id: '6ffcb0dc-023d-4f98-8dde-677feeb0376d',
      TemplateQuestionId: null,
      EnLabel: 'number',
      ArLabel: 'number',
      FieldOrder: 2,
      SectionId: null,
      ConditionalView: {
        Action: 'hidden',
        Operator: 'and',
        Conditions: [
          {
            ArErrorMsg: null,
            ConditionType: 'MinLength',
            EnErrorMsg: null,
            LinkedFieldId: '666b2d9a-d008-468d-99ab-150c62a2273b',
            ValidatorValue: '2',
          },
          {
            ArErrorMsg: null,
            ConditionType: 'Required',
            EnErrorMsg: null,
            LinkedFieldId: '666b2d9a-d008-468d-99ab-150c62a2273b',
            ValidatorValue: '',
          },
        ],
      },
      VisibilityView: [],
    },
    {
      EnPlaceholder: null,
      ArPlaceholder: null,
      FieldType: 'textarea',
      TemplateType: null,
      HasAttachments: false,
      HasNotes: false,
      ResponsibleUnit: null,
      SeverityLevel: null,
      Id: '5bb2ab99-82bd-4f8c-bfcf-1bc57cde08ee',
      TemplateQuestionId: null,
      EnLabel: 'textarea',
      ArLabel: 'textarea',
      FieldOrder: 3,
      SectionId: null,
      ConditionalView: {
        Action: 'hidden',
        Operator: 'and',
        Conditions: [],
      },
      VisibilityView: [],
    },
    {
      Multiple: false,
      FieldType: 'select',
      TemplateType: null,
      Representation: 'DROPDOWN_REP',
      GroupOfAnswers: {
        Id: '3cdbfc59-5eed-4fd2-adde-01f0f6e8a864',
        EnName: 'Light Damage Details',
        ArName: 'Light Damage Details',
        IsSystem: true,
        IsAvailableForAllUnits: true,
        Status: 1,
        IsDeleted: 0,
        MaxValue: 0,
        MinValue: 0,
        AnswerGroupValues: [
          {
            Id: '62a44de0-f71d-eb11-a82e-000d3a9990ed',
            EnValue: 'Burned',
            ArValue: 'Burned',
            AnswerGroupId: '3cdbfc59-5eed-4fd2-adde-01f0f6e8a864',
            Weight: 0,
          },
          {
            Id: '63a44de0-f71d-eb11-a82e-000d3a9990ed',
            EnValue: 'Weak',
            ArValue: 'Weak',
            AnswerGroupId: '3cdbfc59-5eed-4fd2-adde-01f0f6e8a864',
            Weight: 0,
          },
          {
            Id: '64a44de0-f71d-eb11-a82e-000d3a9990ed',
            EnValue: 'Different Color',
            ArValue: 'Different Color',
            AnswerGroupId: '3cdbfc59-5eed-4fd2-adde-01f0f6e8a864',
            Weight: 0,
          },
          {
            Id: '65a44de0-f71d-eb11-a82e-000d3a9990ed',
            EnValue: 'Missing',
            ArValue: 'Missing',
            AnswerGroupId: '3cdbfc59-5eed-4fd2-adde-01f0f6e8a864',
            Weight: 0,
          },
        ],
        AnswerGroupValuesCount: 4,
      },
      EnPlaceholder: null,
      ArPlaceholder: null,
      HasAttachments: false,
      HasNotes: false,
      ResponsibleUnit: null,
      SeverityLevel: null,
      Id: 'b39c9e8d-307a-4d42-87c5-8939e1ee58b0',
      TemplateQuestionId: null,
      EnLabel: 'MCQ',
      ArLabel: 'MCQ',
      FieldOrder: 4,
      SectionId: null,
      ConditionalView: {
        Action: 'hidden',
        Operator: 'and',
        Conditions: [],
      },
      VisibilityView: [],
    },
  ];
  dynamicForm: FormGroup;
  constructor() {
    const controls = {};
    this.fields.forEach((field: any) => {
      const validationsArray = [];
      if (field.Validations && field.Validations.length > 0) {
        field.Validations.forEach((validation) => {
          if (validation.name == 'required') {
            validationsArray.push(Validators.required);
          } else if (validation.name == 'maxlength') {
            validationsArray.push(Validators.maxLength(validation.value));
          } else if (validation.name == 'minlength') {
            validationsArray.push(Validators.minLength(validation.value));
          } else if (validation.name == 'regex') {
            validationsArray.push(Validators.pattern(validation.value));
          }
          console.log(validation.name, validation.value);
        });
      }
      controls[field.Id] = new FormControl('', validationsArray);
    });
    this.dynamicForm = new FormGroup(controls);
    console.log(this.dynamicForm);
    if (this.dynamicForm && this.dynamicForm.value) {
      this.old = { ...this.dynamicForm.value };
      this.dynamicForm.valueChanges.subscribe((changes) => {
        // console.log(this.dynamicForm);
        const key = Object.keys(changes).find((k) => changes[k] != this.old[k]);
        this.old = { ...this.dynamicForm.value };
        console.log(this.fields.find(field => field.Id == key))
      });
    }
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }
}
