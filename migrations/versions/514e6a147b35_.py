"""empty message

Revision ID: 514e6a147b35
Revises: 
Create Date: 2018-02-08 13:29:26.457951

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '514e6a147b35'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    # op.add_column('user', sa.Column('phone', sa.String(length=140), nullable=True))
    # ### end Alembic commands ###
    pass

def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'phone')
    # ### end Alembic commands ###